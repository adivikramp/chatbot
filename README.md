## Instaling Packages

First, Clone the project:

```bash
git clone https://github.com/adivikramp/chatbot.git
```

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# BeyondChats Chatbot Setup UI

This project is a **Next.js** application built with **TypeScript**, **shadcn**, and **framer-motion/react** for smooth animations. It provides a seamless UI/UX for setting up a chatbot, designed to be **mobile-responsive** and tested on **iPhone 15, OnePlus Nord, and a laptop**.  

## 🚀 Features & Flow

### 1️⃣ User Authentication (Simplified)
- The signup/login process is **not implemented** due to time constraints.  
- By default, the user is **logged in**
- Clicking **"Logout"** reveals the signup/login UI. Clicking **"Login"** logs the user in instantly (without authentication).  

### 2️⃣ Bot Integration & Scraping
- The user enters:
  - **Company Name**
  - **Website URL**
  - **Company Description**
- On submission, a **dummy scraping page** appears, showing:
  - **Dummy webpage data** with a progress bar.
  - Clicking **"View Details"** displays **pre-set extracted data** (same for all).

### 3️⃣ Chatbot Testing & Integration
- **Test on Sandbox** – Opens a test chatbot.
- **Integrate on Website** – Provides:
  - A **copy-paste** code snippet.
  - An option to **email instructions** to a developer.
- **Test Integration** – Randomly shows **Success** or **Failure**.
  - On **Failure**, retry.
  - On **Success**, access:
    - **Admin Panel (with dummy data)**
    - **Chatbot Page (responds with one static reply)**
    - **Social media sharing options**

## 🔍 Why Dummy Data?
Implementing a real **web scraping API** would have taken too long, affecting the frontend development focus. Hence, all scraping data and chatbot responses are **static placeholders**.

## 🔍 Deployed Link:
- https://chatbot-integration-phi.vercel.app/