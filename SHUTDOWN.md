# 🔴 Shutdown & Restart Instructions

## ✅ AKTUÁLNÍ STAV (2025-10-19)

**Status:** Weby jsou OFFLINE
- https://eroticreviews.eu → 502 Bad Gateway
- https://eroticreviews.cz → 502 Bad Gateway

**Důvod:** Nedokončený vývoj, aplikace shodžena aby se nezobrazovala veřejnosti

---

## 🛑 Jak VYPNOUT weby (shutdown)

### 1. Zastavit VPS aplikaci

```bash
# Připojit se na VPS
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98

# Zastavit PM2 proces
pm2 stop er-eu
pm2 delete er-eu

# Ověřit, že je zastaveno
pm2 list
```

### 2. Zastavit lokální dev servery (volitelné)

```bash
# Najít a ukončit procesy na portech 3000, 3001, 3003
lsof -ti:3000,3001,3003 | xargs kill -9

# Nebo jednotlivě
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
lsof -ti:3003 | xargs kill -9
```

### 3. Ověřit, že jsou weby offline

```bash
# Mělo by vrátit 502 Bad Gateway
curl -I https://eroticreviews.eu
curl -I https://eroticreviews.cz
```

---

## ✅ Jak ZAPNOUT weby (startup)

### Metoda A: PM2 (Production na VPS)

```bash
# 1. Připojit se na VPS
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98

# 2. Přejít do projektové složky
cd /root/eroticreviews-eu/apps/eu

# 3. Pull nejnovější změny z GitHub (volitelné)
git pull origin main

# 4. Nainstalovat dependencies (pokud byly změny)
npm install

# 5. Build produkční verze
npm run build

# 6. Spustit s PM2
pm2 start "npm start" --name er-eu

# 7. Uložit PM2 konfiguraci (aby se spustilo po restartu)
pm2 save
pm2 startup

# 8. Ověřit, že běží
pm2 list
pm2 logs er-eu --lines 50
```

### Metoda B: Lokální dev server (Development)

```bash
# Přejít do projektu
cd "/Users/Radim/Library/CloudStorage/GoogleDrive-radim@wikiporadce.cz/Můj disk/claude code/eroticreviews-eu/apps/eu"

# Spustit dev server (port 3000)
npm run dev

# Nebo na jiném portu
PORT=3001 npm run dev
```

---

## 🔍 Diagnostika

### Zkontrolovat PM2 status

```bash
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 list"
```

### Zobrazit PM2 logy

```bash
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 logs er-eu --lines 100"
```

### Zkontrolovat běžící Next.js procesy

```bash
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "ps aux | grep next"
```

### Zkontrolovat nginx status

```bash
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "systemctl status nginx"
```

### Testovat web z příkazové řádky

```bash
# Test domovské stránky
curl -I https://eroticreviews.eu

# Test s verbose výstupem
curl -v https://eroticreviews.eu

# Test konkrétní stránky
curl https://eroticreviews.eu/city/prague
```

---

## 📊 VPS Server Info

- **IP adresa:** 72.61.180.98
- **SSH klíč:** ~/.ssh/hostinger_vps
- **User:** root
- **OS:** Ubuntu 22.04
- **Node.js:** v18.x
- **PM2:** Ano (process manager)
- **Nginx:** Ano (reverse proxy)

### Připojení na VPS

```bash
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98
```

---

## 🌐 Domény

**Aktivní domény:**
- eroticreviews.eu (primární)
- eroticreviews.cz (Czech ccTLD)

**Plánované domény:**
- eroticreviews.de (German)
- eroticreviews.es (Spanish)
- eroticreviews.fr (French)
- eroticreviews.nl (Dutch)
- eroticreviews.uk (UK)

---

## ⚠️ Důležité poznámky

1. **VŽDY** zastavte PM2 proces před modifikací souborů na VPS
2. **VŽDY** spusťte `npm run build` po změnách kódu
3. **NIKDY** nepoužívejte `npm run dev` v produkci (používejte `npm start`)
4. PM2 automaticky restartuje aplikaci při pádu
5. PM2 se spustí automaticky po restartu VPS (pokud byl uložen s `pm2 save`)

---

## 🚀 Quick Commands

```bash
# Restart aplikace
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 restart er-eu"

# Stop aplikace
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 stop er-eu"

# Logy v reálném čase
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 logs er-eu"

# Status všech PM2 aplikací
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 list"

# Smazat PM2 app
ssh -i ~/.ssh/hostinger_vps root@72.61.180.98 "pm2 delete er-eu"
```

---

## 📝 Historie změn

**2025-10-19:**
- Weby vypnuty kvůli nedokončenému vývoji
- PM2 proces "er-eu" zastaven a smazán
- Všechny lokální dev servery ukončeny
- Status: OFFLINE (502 Bad Gateway)

---

## 📞 Support

Pokud máte problémy:
1. Zkontrolujte PM2 logy: `pm2 logs er-eu`
2. Zkontrolujte nginx logy: `journalctl -u nginx -n 100`
3. Restartujte nginx: `systemctl restart nginx`
4. Restartujte aplikaci: `pm2 restart er-eu`
