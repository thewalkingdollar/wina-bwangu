# How I Deployed My Project to Vercel

**My Name:** Blessed Chisanga | **My ID:** 202202741

## How I Pushed My Code to GitHub

I ran these commands in my VS Code terminal:

```bash
git init
git add .
git commit -m "My first version maintained - Blessed Chisanga 202202741"
git branch -M main
git remote add origin https://github.com/thewalkingdollar/wina-bwangu.git
git push -u origin main
```

## How I Deployed to Vercel

1. I went to vercel.com and logged in with my GitHub
2. I clicked Add New -> Project
3. I selected my repository thewalkingdollar/wina-bwangu
4. I left Framework as Other and Root Directory as ./
5. I clicked Deploy

My live URL is now: https://wina-bwangu.vercel.app

## How I Verified My Deployment

I tested:
- My homepage at / shows my first version UI
- My API at /api/health returns online status
- My dashboard at /api/dashboard returns my calculations
- My test plan at /test-plan.html shows my unit and regression tests
