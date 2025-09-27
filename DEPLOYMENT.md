# Deployment Guide - CI/CD Pipeline Setup

This guide will help you set up automatic deployment to Vercel with GitHub Actions.

## 🚀 Quick Setup Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `anshuman-portfolio` (or any name you prefer)
3. Make it public or private
4. Don't initialize with README (we already have one)

### 2. Connect Local Repository to GitHub

```bash
# In your project directory
git add .
git commit -m "Initial commit: Modern portfolio with Next.js"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/anshuman-portfolio.git
git push -u origin main
```

### 3. Set Up Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm ci`

### 4. Get Vercel Credentials

#### Get Vercel Token:
1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token with appropriate scope
3. Copy the token (save it securely)

#### Get Project and Org IDs:
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login and link project
vercel login
vercel link

# Get IDs (they'll be shown in .vercel/project.json)
cat .vercel/project.json
```

### 5. Configure GitHub Secrets

In your GitHub repository, go to Settings → Secrets and Variables → Actions

Add these secrets:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 6. Workflow Explanation

The pipeline includes two workflows:

#### **Main CI/CD Pipeline** (`.github/workflows/ci.yml`):
- **Test Job**: Runs on every push/PR
  - Lints code with ESLint
  - Checks TypeScript types
  - Builds the application
  - Uploads build artifacts

- **Deploy Job**: Runs only on main/master branch
  - Deploys to production on Vercel
  - Only runs if tests pass

- **Preview Job**: Runs on Pull Requests
  - Creates preview deployments
  - Perfect for testing changes

#### **Simple Deploy** (`.github/workflows/deploy.yml`):
- Alternative workflow using Vercel CLI directly
- More control over deployment process

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Quality Assurance
npm run lint         # Check code quality
npm run lint:fix     # Fix linting issues
npm run type-check   # Check TypeScript types

# Deployment
npm run deploy       # Deploy to Vercel (production)
npm run deploy:preview  # Deploy preview to Vercel
```

## 🌟 How It Works

1. **Make Changes**: Edit your code locally
2. **Commit & Push**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Automatic Deployment**:
   - GitHub Actions runs tests
   - If tests pass, deploys to Vercel
   - Live site updates automatically

## 📊 Pipeline Features

- ✅ **Automated Testing**: ESLint + TypeScript checks
- ✅ **Build Verification**: Ensures code compiles
- ✅ **Preview Deployments**: Test PRs before merging
- ✅ **Production Deployments**: Automatic on main branch
- ✅ **Artifact Storage**: Saves build files for debugging
- ✅ **Parallel Jobs**: Fast execution with job dependencies

## 🐛 Troubleshooting

### Build Failures
- Check GitHub Actions logs for specific errors
- Run `npm run build` locally to test
- Ensure all dependencies are in package.json

### Deployment Failures
- Verify Vercel tokens are correct and have proper permissions
- Check that project is properly linked to Vercel
- Ensure environment variables are set correctly

### Linting Issues
- Run `npm run lint:fix` to auto-fix issues
- Check ESLint configuration in `eslint.config.mjs`

## 🔒 Security Notes

- Never commit API tokens to repository
- Use GitHub Secrets for sensitive information
- Regularly rotate Vercel tokens
- Monitor deployment logs for security issues

## 📈 Monitoring

- **GitHub Actions**: Monitor build/deploy status in Actions tab
- **Vercel Dashboard**: View deployment history and performance
- **Live Site**: Your portfolio automatically updates at your Vercel URL

---

**🎉 That's it! Your portfolio now has professional CI/CD automation.**

Any changes you push to the main branch will automatically deploy to your live site!