# JLS Reglazing - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all required environment variables are set in Vercel:

```bash
# Supabase (Frontend - VITE_ prefix)
VITE_SUPABASE_URL=https://rwpxoaawngbxzttykbty.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Supabase (Backend - for API routes)
SUPABASE_URL=https://rwpxoaawngbxzttykbty.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Email (Gmail SMTP)
GMAIL_USER=burritosama.dev@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NOTIFICATION_EMAIL=jorge@jlsreglazing.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Slack Notifications
SLACK_WEBHOOK_URL=your-slack-webhook-url
SLACK_CHANNEL_SUBMISSIONS=#form-submissions
SLACK_CHANNEL_SPAM=#security-alerts

# n8n Configuration
N8N_WEBHOOK_URL=your-n8n-webhook-url
N8N_WEBHOOK_TOKEN=your-webhook-token
N8N_API_KEY=your-n8n-api-key

# App Config
NODE_ENV=production
APP_URL=https://jlsreglazing.com
```

### 2. Build Test
Run a production build locally to verify:

```bash
npm run build
npm run preview
```

### 3. Domain Setup
- Purchase domain: `jlsreglazing.com`
- Configure DNS with Vercel nameservers
- Set up SSL certificate (automatic with Vercel)

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
cd "/Users/jorgesaldana/Documents/Alpha - V/VS Code/JLS-Reglazing"
vercel --prod
```

4. Configure environment variables:
```bash
vercel env add VITE_SUPABASE_URL production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# ... add all other variables
```

### Option 2: Deploy via GitHub + Vercel Dashboard (Recommended)

1. **Initialize Git Repository**:
```bash
cd "/Users/jorgesaldana/Documents/Alpha - V/VS Code/JLS-Reglazing"
git init
git add .
git commit -m "Initial commit: JLS Reglazing website"
```

2. **Create GitHub Repository**:
- Go to GitHub.com
- Create new repository: `jls-reglazing`
- Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/jls-reglazing.git
git branch -M main
git push -u origin main
```

4. **Connect to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Configure project:
  - **Framework Preset**: Vite
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
  - **Install Command**: `npm install`

5. **Add Environment Variables** in Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add all variables from `.env` file
- Select "Production" environment
- Click "Save"

6. **Deploy**:
- Vercel will automatically deploy
- Monitor deployment in the dashboard
- Visit your site at the Vercel URL

7. **Add Custom Domain**:
- Go to Project Settings → Domains
- Add `jlsreglazing.com`
- Add `www.jlsreglazing.com`
- Configure DNS as instructed by Vercel

## Post-Deployment Verification

### 1. Test All Pages
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Services page displays properly
- [ ] Process page animations work
- [ ] About page renders correctly
- [ ] Gallery page displays
- [ ] Contact page loads
- [ ] All 4 county pages work

### 2. Test Contact Form
- [ ] Form displays correctly
- [ ] Validation works
- [ ] Honeypot field is hidden
- [ ] Timing tracking works
- [ ] Submit to Supabase succeeds
- [ ] Email notification sent
- [ ] Slack notification sent
- [ ] n8n workflow triggered
- [ ] Success message displays

### 3. SEO Verification
- [ ] Open Graph tags present
- [ ] Meta descriptions correct
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Canonical URLs correct
- [ ] All pages indexed in Google Search Console

### 4. Performance Checks
- [ ] Lighthouse score > 90
- [ ] Mobile-friendly test passes
- [ ] Images load properly
- [ ] Animations run smoothly
- [ ] No console errors
- [ ] API endpoints respond correctly

### 5. Analytics Setup
- [ ] Google Analytics installed (if needed)
- [ ] Google Search Console verified
- [ ] Google Business Profile created
- [ ] Bing Webmaster Tools verified

## Domain Configuration

### DNS Records (at your domain registrar):

```
Type    Name    Value                           TTL
A       @       76.76.21.21                     Auto
CNAME   www     cname.vercel-dns.com            Auto
```

### SSL Certificate
- Automatically provisioned by Vercel
- Renews automatically
- Supports both apex and www domains

## Continuous Deployment

With GitHub connected:
- Push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capability from Vercel dashboard

## Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- Track page views, visitors, performance

### Error Tracking
- Monitor deployment logs in Vercel
- Set up error notifications
- Review form submission errors in Supabase

### Uptime Monitoring
- Use Vercel's built-in monitoring
- Or set up external service (UptimeRobot, Pingdom)

## Troubleshooting

### Build Fails
1. Check build logs in Vercel
2. Verify all dependencies are in `package.json`
3. Ensure environment variables are set
4. Test build locally first

### Form Submissions Not Working
1. Verify Supabase credentials
2. Check API endpoint environment variables
3. Review Supabase logs
4. Test with curl or Postman

### Domain Not Resolving
1. Verify DNS records
2. Wait for DNS propagation (up to 48 hours)
3. Check domain registration status
4. Contact Vercel support if needed

## Rollback Procedure

If something goes wrong:

1. Go to Vercel Dashboard
2. Select project → Deployments
3. Find last working deployment
4. Click "..." → "Promote to Production"

Or via Git:
```bash
git revert HEAD
git push origin main
```

## Security

### Secrets Management
- Never commit `.env` to Git
- Rotate API keys periodically
- Use Vercel environment variables
- Enable 2FA on all accounts

### Form Protection
- Honeypot field active
- Rate limiting enabled
- Spam detection configured
- Blocklist management in place

## Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

### GitHub Support
- Documentation: https://docs.github.com

## Backup Strategy

### Code
- Git repository (GitHub)
- Vercel deployment history

### Database
- Supabase automatic backups
- Manual exports as needed

### Environment Variables
- Store securely in password manager
- Document in team wiki
- Keep `.env.example` updated

## Future Improvements

- [ ] Add Google Analytics
- [ ] Implement A/B testing
- [ ] Add live chat widget
- [ ] Implement blog section
- [ ] Add customer testimonials page
- [ ] Integrate before/after image gallery
- [ ] Add booking/scheduling system
- [ ] Implement customer portal
