# Deployment Guide - EroticReviews 4.0

## 🚀 Option 1: Vercel (Recommended)

### Why Vercel?
- Native Next.js 15 support
- Zero-config deployment
- Automatic multi-domain setup
- Edge functions + ISR
- Free tier: 100 GB bandwidth/month
- PostgreSQL database available

### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project root**
```bash
cd /path/to/eroticreviews-eu
vercel
```

4. **Configure domains** (in Vercel Dashboard)
- Add custom domains:
  - eroticreviews.eu
  - eroticreviews.cz
  - eroticreviews.de
  - eroticreviews.es
  - eroticreviews.fr
  - eroticreviews.nl
  - eroticreviews.uk

5. **Environment Variables** (Vercel Dashboard → Settings → Environment Variables)
```
SITE_DOMAIN=eroticreviews.eu
SITE_LOCALE=en
DEFAULT_CURRENCY=EUR
NEXT_PUBLIC_SITE_URL=https://eroticreviews.eu
NEXT_PUBLIC_SITE_NAME=EroticReviews.EU
```

### Multi-Domain Setup in Vercel

Each ccTLD app will be a separate Vercel project:

```bash
# Deploy EU app
cd apps/eu
vercel --prod
# Add domain: eroticreviews.eu

# Deploy CZ app (when ready)
cd apps/cz
vercel --prod
# Add domain: eroticreviews.cz

# Repeat for DE, ES, FR, NL, UK
```

---

## 🖥️ Option 2: Hostinger VPS

### Requirements:
- VPS plan (KVM 1: $4.99/month minimum)
- Ubuntu 22.04 + Node.js template
- SSH access

### Current Status:
❌ **No VPS instance found** on your Hostinger account (API returned empty array)

### Steps to Deploy:

1. **Order VPS** at https://www.hostinger.com/vps-hosting
   - Select KVM 1 or higher
   - Choose "Ubuntu 22.04 with Node.js" template

2. **SSH into VPS**
```bash
ssh root@your-vps-ip
```

3. **Install dependencies**
```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18+ (if not included in template)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install nginx
apt install -y nginx

# Install PM2 (process manager)
npm install -g pm2
```

4. **Clone repository**
```bash
cd /var/www
git clone https://github.com/your-repo/eroticreviews-eu.git
cd eroticreviews-eu
```

5. **Install & Build**
```bash
npm install
npm run build:eu
```

6. **Configure PM2**
```bash
cd apps/eu
pm2 start npm --name "er-eu" -- start
pm2 startup
pm2 save
```

7. **Configure Nginx** (create `/etc/nginx/sites-available/eroticreviews.eu`)
```nginx
server {
    listen 80;
    server_name eroticreviews.eu www.eroticreviews.eu;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Enable site & restart Nginx**
```bash
ln -s /etc/nginx/sites-available/eroticreviews.eu /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

9. **Setup SSL with Let's Encrypt**
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d eroticreviews.eu -d www.eroticreviews.eu
```

### Database Setup (Hostinger VPS)

**MySQL:**
```bash
apt install -y mysql-server
mysql_secure_installation
```

**PostgreSQL:**
```bash
apt install -y postgresql postgresql-contrib
```

---

## 📊 Comparison

| Feature | Vercel | Hostinger VPS |
|---------|--------|---------------|
| **Setup Time** | 5 minutes | 2-3 hours |
| **Cost** | Free - $20/mo | $4.99-6.99/mo |
| **Scaling** | Automatic | Manual |
| **SSL** | Automatic | Manual (Let's Encrypt) |
| **CI/CD** | Built-in | Manual setup |
| **Database** | Vercel Postgres | MySQL/PostgreSQL |
| **Maintenance** | Zero | Weekly updates |
| **Multi-domain** | Easy | Complex (1 nginx config per domain) |

---

## 🎯 Recommendation

**Use Vercel** for initial launch:
1. Faster deployment
2. Zero maintenance
3. Free tier sufficient for testing
4. Easy multi-domain setup
5. Better Next.js 15 support

**Consider VPS later** when:
- Traffic exceeds Vercel free tier
- Need full server control
- Want to reduce costs at scale
- Need custom server-side features

---

## 🔒 AI Protection Files

Already included in the project:

- ✅ `/public/robots.txt` - Blocks AI crawlers (GPTBot, Claude-Web, Google-Extended, etc.)
- ✅ `/public/.well-known/ai.txt` - AI opt-out policy
- ✅ Meta tags in layout.tsx - `noai, noimageai` directives

These files will be deployed automatically to any hosting provider.

---

## 🧪 Test Deployment

Before production deployment, test locally:

```bash
# Build production version
npm run build:eu

# Test production build
cd apps/eu
npm start

# Visit http://localhost:3000
```

Check:
- ✅ All locales work (/, /cs, /de, /es, /fr, /nl)
- ✅ Robots.txt accessible at /robots.txt
- ✅ AI policy at /.well-known/ai.txt
- ✅ Meta tags in page source

---

## 📞 Need Help?

- Vercel docs: https://vercel.com/docs
- Hostinger VPS setup: https://www.hostinger.com/tutorials/vps
- Next.js deployment: https://nextjs.org/docs/deployment

