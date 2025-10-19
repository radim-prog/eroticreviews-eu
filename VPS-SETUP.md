# VPS Setup Instructions

## ✅ SSH Klíč vygenerován

**Tvůj veřejný SSH klíč:**
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGPYIabc3Y1LJ7wrd3eJ33WkA/+SnoU4o4oDf+ItzECi lunamanazer@gmail.com
```

**Soubory:**
- Private key: `~/.ssh/hostinger_vps`
- Public key: `~/.ssh/hostinger_vps.pub`

---

## 📝 Po objednání VPS

### 1. Přidej SSH klíč do Hostinger

**Možnost A - Při objednávce:**
- V kroku "SSH Keys" vlož tento klíč výše
- VPS se vytvoří s tímto klíčem

**Možnost B - Po vytvoření VPS:**
1. Přihlaš se do Hostinger panelu
2. VPS → SSH Keys
3. "Add SSH Key"
4. Vlož veřejný klíč výše

### 2. Získej IP adresu VPS
- V Hostinger panelu: VPS → Overview
- Zkopíruj IP adresu (např. 123.45.67.89)

### 3. Připoj se přes SSH

```bash
# První připojení (když nemáš přidaný SSH klíč)
ssh root@IP_ADRESA
# Zadej heslo z emailu

# S SSH klíčem
ssh -i ~/.ssh/hostinger_vps root@IP_ADRESA
```

---

## 🚀 Deployment na VPS (krok za krokem)

Po připojení na VPS spusť následující příkazy:

### 1. Update systému
```bash
apt update && apt upgrade -y
```

### 2. Zkontroluj Node.js verzi
```bash
node --version  # Mělo by být v18+
npm --version
```

Pokud není Node.js 18+:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
```

### 3. Nainstaluj Git
```bash
apt install -y git
```

### 4. Vytvoř deployment klíč pro GitHub (volitelné)
```bash
ssh-keygen -t ed25519 -C "vps@eroticreviews.eu" -f ~/.ssh/github_deploy -N ""
cat ~/.ssh/github_deploy.pub
# Zkopíruj tento klíč a přidej do GitHub repo → Settings → Deploy keys
```

### 5. Clone projekt
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/eroticreviews-eu.git
cd eroticreviews-eu
```

**Pokud repo ještě není na GitHubu:**
Vytvoř repo lokálně a push:
```bash
# Na lokálním Macu
cd "/Users/Radim/Library/CloudStorage/GoogleDrive-radim@wikiporadce.cz/Můj disk/claude code/eroticreviews-eu"
git init
git add .
git commit -m "Initial commit - ER 4.0"
git remote add origin https://github.com/YOUR_USERNAME/eroticreviews-eu.git
git push -u origin main
```

### 6. Install dependencies
```bash
npm install --cache /tmp/npm-cache
```

### 7. Build EU app
```bash
npm run build:eu
```

### 8. Install PM2 (process manager)
```bash
npm install -g pm2
```

### 9. Start aplikaci
```bash
cd apps/eu
PORT=3000 pm2 start npm --name "er-eu" -- start
pm2 startup  # Automatický start po restartu VPS
pm2 save
```

### 10. Zkontroluj, že běží
```bash
pm2 status
curl http://localhost:3000  # Měl by vrátit HTML
```

### 11. Install & Configure Nginx
```bash
apt install -y nginx
```

Vytvoř konfiguraci:
```bash
nano /etc/nginx/sites-available/eroticreviews.eu
```

Vlož:
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
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktivuj konfiguraci:
```bash
ln -s /etc/nginx/sites-available/eroticreviews.eu /etc/nginx/sites-enabled/
nginx -t  # Test konfigurace
systemctl restart nginx
```

### 12. Setup SSL (Let's Encrypt)
```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d eroticreviews.eu -d www.eroticreviews.eu
```

Certbot se zeptá na email a automaticky nakonfiguruje SSL.

### 13. Nastav DNS záznamy

V nastavení domény (např. na GoDaddy, Cloudflare):

```
Type: A
Name: @
Value: IP_ADRESA_VPS
TTL: 3600

Type: A
Name: www
Value: IP_ADRESA_VPS
TTL: 3600
```

Počkej 5-30 minut na propagaci DNS.

---

## 🔧 Užitečné příkazy

```bash
# Zobraz logy
pm2 logs er-eu

# Restart aplikace
pm2 restart er-eu

# Stop aplikace
pm2 stop er-eu

# Status všech aplikací
pm2 status

# Nginx logy
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Restart Nginx
systemctl restart nginx

# Zkontroluj nginx konfiguraci
nginx -t
```

---

## 🔄 Update aplikace (deploy nové verze)

```bash
cd /var/www/eroticreviews-eu
git pull origin main
npm install --cache /tmp/npm-cache
npm run build:eu
pm2 restart er-eu
```

---

## 🌍 Deploy dalších domén (CZ, DE, ES, FR, NL, UK)

Pro každou další doménu:

1. Build app:
```bash
npm run build:cz  # nebo build:de, build:es atd.
```

2. Start PM2:
```bash
cd apps/cz
PORT=3001 pm2 start npm --name "er-cz" -- start
pm2 save
```

3. Vytvoř nginx config (`/etc/nginx/sites-available/eroticreviews.cz`):
```nginx
server {
    listen 80;
    server_name eroticreviews.cz www.eroticreviews.cz;

    location / {
        proxy_pass http://localhost:3001;  # Jiný port pro každou doménu!
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. Aktivuj & SSL:
```bash
ln -s /etc/nginx/sites-available/eroticreviews.cz /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
certbot --nginx -d eroticreviews.cz -d www.eroticreviews.cz
```

**Port mapping:**
- EU (.eu): 3000
- CZ (.cz): 3001
- DE (.de): 3002
- ES (.es): 3003
- FR (.fr): 3004
- NL (.nl): 3005
- UK (.uk): 3006

---

## 🛡️ Firewall (UFW)

```bash
# Povolení HTTP, HTTPS, SSH
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
ufw status
```

---

## 📊 Monitoring

```bash
# CPU & Memory usage
htop

# Disk space
df -h

# Aplikace logy
pm2 monit
```

---

## ✅ Checklist po nasazení

- [ ] VPS objednán a běží
- [ ] SSH klíč přidán
- [ ] Připojení přes SSH funguje
- [ ] Node.js 18+ nainstalován
- [ ] Projekt naklonován z GitHubu
- [ ] Dependencies nainstalovány
- [ ] Build úspěšný
- [ ] PM2 spuštěn
- [ ] Nginx nakonfigurován
- [ ] SSL certifikát získán
- [ ] DNS záznamy nastaveny
- [ ] Web běží na https://eroticreviews.eu
- [ ] robots.txt dostupný
- [ ] AI opt-out soubory dostupné

---

## 🆘 Troubleshooting

**Problem: Port 3000 already in use**
```bash
lsof -i :3000
kill -9 PID_PROCESU
```

**Problem: Nginx 502 Bad Gateway**
```bash
pm2 status  # Zkontroluj, že aplikace běží
pm2 logs er-eu  # Podívej se na errory
```

**Problem: SSL certifikát selhává**
- Zkontroluj, že DNS směřuje na VPS IP
- Počkej 30 minut na DNS propagaci
- Zkus: `certbot renew --dry-run`

**Problem: npm permission errors**
```bash
npm install --cache /tmp/npm-cache
```

---

## 📞 Až budeš mít VPS ready

Ozvi se a budu tě provádět krok za krokem! 🚀

