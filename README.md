# Wina Bwangu - FIRST VERSION MAINTAINED

**Student Name:** Blessed Chisanga  
**Student ID:** 202202741  
**Project:** Wina Bwangu FINTECH Transaction Management System

## About This Project

This is my original first version UI that I have preserved exactly as I liked it in Exercise 2. I have now added a backend without changing the UI.

I maintained the first version because I liked the design and wanted to keep it consistent throughout my submission.

## What I Have Built

**Frontend:** This is my first version from Exercise 2 - built with Tailwind CSS, Glassmorphism design, and gradient styling. This includes:
- My Dashboard with revenue charts
- My Transaction form with booth dropdown → location auto-display → service filtering
- My Booth Performance view
- My responsive design (works on mobile 768px and tablet 1024px)

**Backend:** I have added a new Express server with APIs:
- I created server/index.js to handle API requests
- I created server/database.js as my database layer (simulated MySQL concept for Exercise 3)
- My backend now saves transactions via API and provides calculations

## How to Run My Project in VS Code

1. I open the folder in Visual Studio Code
2. I run `npm install` to install dependencies
3. I run `npm start` to start the server
4. I open `http://localhost:3000` in my browser

## How My System Works

- My UI is 100% my first version - I did not change the design
- My backend now saves transactions via API (POST /api/transactions)
- For Exercise 2, you can use my UI as is (client-side prototype)
- For Exercise 3, my backend APIs provide /api/dashboard calculations (server-side prototype)

## My API Endpoints

- GET /api/health - I use this to check if server is online
- GET /api/booths - I return all 6 booths with locations
- GET /api/services - I return service rates and limits
- GET /api/transactions - I return all transactions
- GET /api/dashboard - I calculate Total Revenue, Total Capital, Remaining Limits
- POST /api/transactions - I create new transactions with auto-generated IDs (WB0000001 format)

## My Deployment

I deployed my project to Vercel using my GitHub repository:
https://github.com/thewalkingdollar/wina-bwangu

Live URL: https://wina-bwangu.vercel.app

## No Duplicates

This is a single unified system with my first version design maintained. I have removed all duplicate files and kept only the essential files.

---
*Submitted by: Blessed Chisanga - 202202741*
