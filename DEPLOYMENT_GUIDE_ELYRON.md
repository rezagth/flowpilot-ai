# 🚀 Guide de Déploiement - Elyron Labs

## Situation Actuelle

```
Status:  ✅ PRÊT POUR DÉPLOIEMENT
Build:   ✅ Successful (7.0s)
Errors:  ✅ Zéro
Warnings: ⚠️  1 (métadonnées viewport - non critique)
Server:  ✅ Actif sur localhost:3001
```

---

## Pre-Deployment Checklist

### 🔍 Tests Locaux
- [ ] Naviguer dans toutes les sections (hero, services, features, etc.)
- [ ] Tester tous les liens internes et externes
- [ ] Vérifier le design sur mobile (375px, 768px, 1024px)
- [ ] Tester dark mode (si applicable)
- [ ] Valider les formulaires de contact
- [ ] Tester les intégrations (si présentes)

### 🎨 Assets Visuels
- [ ] Mettre à jour `public/og.jpg` (1200x630px) avec logo Elyron
- [ ] Vérifier favicon (32x32 favicons, 180x180 apple-touch)
- [ ] Optimiser toutes les images
- [ ] Tester les social media previews

### ⚙️ Optimisations SEO
- [ ] Vérifier robots.txt → `https://elyron.ai`
- [ ] Regénérer sitemap.xml (check: `/app/sitemap.ts`)
- [ ] Tester robots generation → `https://elyron.ai` (check: `/app/robots.ts`)
- [ ] Valider Schema.org markup
- [ ] Tester OpenGraph avec URL preview tool

### 🔐 Sécurité
- [ ] Vérifier les en-têtes de sécurité (X-Frame-Options, CSP)
- [ ] Valider les certificats SSL
- [ ] Tester les redirects HTTPS
- [ ] Vérifier les CORS headers

### 📊 Performance
- [ ] Lighthouse: Perf > 90, SEO > 95
- [ ] WebPageTest: First Contentful Paint < 1.5s
- [ ] Core Web Vitals: LCP, FID, CLS acceptables
- [ ] Bundle size: Check avec `next/image` optimization

### ♿ Accessibilité
- [ ] WCAG 2.1 AA compliance
- [ ] axe DevTools: Zéro violations critiques
- [ ] Tester au clavier (Tab, Enter, Escape)
- [ ] Tester les lecteurs d'écran
- [ ] Contraste des couleurs: WCAG AA minimum

---

## Étapes de Déploiement

### Phase 1: Infrastructure DNS
```bash
# Avant: flowpilot.ai → ancien serveur
# Après: elyron.ai → nouveau serveur

# 1. Préparer le domaine elyron.ai
#    - Enregistrer le domaine
#    - Configurer les DNS records
#    - Pointer vers le serveur de production

# 2. Certificat SSL
#    - Générer certificat SSL pour elyron.ai
#    - Configurer HTTPS redirect
#    - Vérifier la chaîne de certificats
```

### Phase 2: Build Production
```bash
# Sur votre serveur de production:

cd /var/www/elyron-labs
git clone <repo> .
pnpm install --prod
pnpm build  # ✅ Devrait prendre ~7s

# Vérifier la build:
ls -la .next/
# La build est dans .next/standalone ou .next/static
```

### Phase 3: Déploiement Next.js
```bash
# Option A: Standalone deployment (Recommandé)
npm install sharp  # Pour l'optimisation d'images
node .next/standalone/server.js

# Option B: Docker (Recommandé pour le scaling)
# Créer Dockerfile:

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
EXPOSE 3000
CMD ["node", ".next/standalone/server.js"]

# Construire et déployer:
docker build -t elyron-labs .
docker run -p 3000:3000 elyron-labs
```

### Phase 4: Reverse Proxy (Nginx)
```nginx
server {
    listen 443 ssl http2;
    server_name elyron.ai www.elyron.ai;

    ssl_certificate /etc/letsencrypt/live/elyron.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/elyron.ai/privkey.pem;

    # Redirection du www
    if ($server_name = www.elyron.ai) {
        return 301 https://elyron.ai$request_uri;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
}

# Redirection HTTP → HTTPS
server {
    listen 80;
    server_name elyron.ai www.elyron.ai;
    return 301 https://elyron.ai$request_uri;
}
```

### Phase 5: Redirection du Domaine Ancien
```nginx
# Pour flowpilot.ai → elyron.ai (301 permanent)

server {
    listen 80 443 ssl;
    server_name flowpilot.ai www.flowpilot.ai;

    ssl_certificate /etc/letsencrypt/live/flowpilot.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/flowpilot.ai/privkey.pem;

    return 301 https://elyron.ai$request_uri;
}
```

### Phase 6: Analytics & Monitoring
```javascript
// Vérifier que Google Analytics est configuré
// Dans app/layout.tsx:

export const metadata: Metadata = {
  // ... existing config
  // Google Analytics script devrait être présent
}

// Vérifier:
// - Google Search Console: elyron.ai
// - Bing Webmaster Tools: elyron.ai
// - CloudFlare DNS (si utilisé)
// - CDN configuration (si présent)
```

---

## Checklist Post-Déploiement

### 🔄 Redirects & DNS
- [ ] flowpilot.ai → 301 vers elyron.ai (valider avec curl)
- [ ] www.elyron.ai → elyron.ai (sans www)
- [ ] HTTP → HTTPS working
- [ ] DNS propagation complète (24-48h)

### 📊 Search Console
- [ ] Ajouter elyron.ai à Google Search Console
- [ ] Soumettre sitemap.xml
- [ ] Demander la réindexation
- [ ] Vérifier les problèmes de crawl

### 📈 Analytics
- [ ] Vérifier le trafic en temps réel
- [ ] Confirmer que les pageviews sont enregistrés
- [ ] Vérifier les funnels de conversion
- [ ] Mettre à jour les dashboards de monitoring

### 🔔 Communications
- [ ] Email: Notification aux utilisateurs
- [ ] Social Media: Annonce du rebranding
- [ ] Blog: Post de présentation Elyron Labs
- [ ] Newsletter: Informer les abonnés

### 🧹 Nettoyage
- [ ] Supprimer les vieux assets flowpilot.ai
- [ ] Archiver les backups des anciennes données
- [ ] Nettoyer les variables d'environnement
- [ ] Mettre à jour la documentation interne

---

## Rollback Plan (Si Problème)

```bash
# Si quelque chose se passe mal:

# 1. Revert DNS
#    - Pointer elyron.ai vers ancien serveur
#    - Attendre la propagation

# 2. Revert Application
#    - Redémarrer ancienne version
#    - Vérifier les logs
#    - Analyser les erreurs

# 3. Debug & Fix
#    - Identifier le problème
#    - Tester en staging
#    - Redéployer avec fix

# 4. Communication
#    - Informer les utilisateurs du problème
#    - Fournir un ETA
#    - Post-mortem après résolution
```

---

## Variables d'Environnement Requises

```bash
# .env.production (pour la production)

# Optionnel: API endpoints
NEXT_PUBLIC_API_URL=https://api.elyron.ai
NEXT_PUBLIC_DOMAIN=elyron.ai

# Google Analytics (si utilisé)
NEXT_PUBLIC_GA_ID=G-XXXXX

# Autres services
# ... ajouter selon besoins
```

---

## Monitoring & Health Checks

```javascript
// Health check endpoint (optionnel)
// app/api/health/route.ts

export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date() })
}

// Uptime monitoring:
// - Pingdom / UptimeRobot pointing to https://elyron.ai/api/health
// - Alert if status !== 200 for 5+ min
```

---

## Commandes Utiles

```bash
# Build local
pnpm build

# Test local
pnpm dev

# Production build
NODE_ENV=production pnpm build

# Vérifier build size
ls -lh .next/static/chunks/

# Vérifier les dépendances
pnpm ls

# Vérifier les vulnérabilités
pnpm audit

# Nettoyer le cache
rm -rf .next
rm -rf node_modules/.cache
pnpm install
```

---

## Support & Documentation

### Pour dépannage:
1. Consulter les logs: `/var/log/nginx/elyron-labs/`
2. Vérifier les erreurs Next.js: `tail -f ~/.pm2/logs/`
3. Valider SEO: https://www.seobility.net/
4. Tester performance: https://pagespeed.web.dev/

### Documentation:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs

---

## Timeline Estimée

| Phase | Durée | Status |
|-------|-------|--------|
| Pre-deployment checks | 2-4h | 📋 À faire |
| Infrastructure setup | 1-2h | 🔧 À faire |
| Build & test | 30min | ⚡ À faire |
| Deployment | 30min | 🚀 À faire |
| DNS propagation | 24-48h | ⏳ À faire |
| Monitoring | Ongoing | 📊 À faire |

---

## Questions Fréquentes

**Q: Comment tester avant de déployer?**  
A: Utilisez `pnpm dev` localement, puis testez en staging sur un domaine de test.

**Q: Que faire si le DNS ne propage pas?**  
A: Les changements DNS peuvent prendre jusqu'à 48h. Vérifier avec `nslookup elyron.ai`.

**Q: Comment monitorer après déploiement?**  
A: Utilisez Google Search Console, Analytics, et des alertes uptime.

**Q: Puis-je revenir en arrière?**  
A: Oui, repointer le DNS et restaurer l'ancienne version (voir Rollback Plan).

---

**Dernière mise à jour**: Janvier 4, 2026  
**Statut**: 🟢 Prêt pour déploiement
