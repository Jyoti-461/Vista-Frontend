## 🚀 TechVerse Vista 2026

### 🌐 Official College Deployment

🎓 **Selected & Officially Deployed by TIMSCDR Mumbai**  
💡 **Solely Designed & Developed**

👉 **[🌐 View Official College Website](https://vista.timscdrmumbai.in)**

---

### ⚡ Live Project (Dynamic Version)

👉 **[🌐🚀 Proposed Website Idea](https://techversevista.vercel.app)**

Admin URL:

https://techversevista.vercel.app/admin-login
ADMIN_USERNAME=admin@timscdr
ADMIN_PASSWORD=timscdr@123

Official Website – Techno-Cultural Festival of TIMSCDR

TechVerse Vista 2026 is a full-stack MERN web application developed for the flagship techno-cultural festival of TIMSCDR Mumbai.
The project includes a modern neon UI, dark/light mode support, animated sections, registration system, and admin dashboard.

🧩 Tech Stack Used
Frontend

React (Vite), Tailwind CSS, Framer Motion (animations), React Icons,
Axios, Backend, Node.js, Express.js, MongoDB (Local – MongoDB Compass),
Mongoose, dotenv, cors, nodemon

🧩 Installation Requirements

🔹 1. Mandatory Software
✅ Node.js
node -v
npm -v

✅ MongoDB (Local)
Used as the database (NOT Atlas)
mongod --version

✅ MongoDB Compass
Connection string:
mongodb://127.0.0.1:27017

✅ Git
Required for version control and GitHub
git --version

✅ Code Editor
Visual Studio Code



📁 Project Structure
TechVerse-Vista-2026/
│
├── frontend/
│   ├── public/
│   │   ├── sponsors/
│   │   ├── about/
│   │   │   ├── event/
│   │   │   └── college/
│   │   └── hero/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Countdown.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── About.jsx
│   │   │   ├── VerticalImageScroll.jsx
│   │   │   ├── Sponsors.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Admin.jsx
│   │   │   └── AdminLogin.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Registration.js
│   │
│   ├── routes/
│   │   ├── registerRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md

⚙️ Environment Setup
1️⃣ Clone Repository
git clone https://github.com/Jyoti-461/Vista.git
cd ViSTA

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Runs on:

http://localhost:5173

3️⃣ Backend Setup
cd backend
npm install
npm run dev


Runs on:

http://localhost:5000

4️⃣ Start MongoDB (Local)
make folder C:\data\db
mongod 
        or
mongod --dbpath C:\data\db


Connect via MongoDB Compass:

mongodb://127.0.0.1:27017

5️⃣ Backend .env File

PORT=5000
#Local
#MONGO_URI=mongodb://127.0.0.1:27017/TechVerseVistaDB
#atlas
MONGO_ATLAS_URI=mongodb+srv://Vista_db:Timscdr%40461@vista.ua3qo9e.mongodb.net/?appName=Vista
CLOUDINARY_CLOUD_NAME=dn90ycdfa
CLOUDINARY_API_KEY=252149714476741
CLOUDINARY_API_SECRET=SV7w5pBrE4pDcu97Ho2AtlL6BwA
ADMIN_USERNAME=admin@timscdr
ADMIN_PASSWORD=timscdr@123





🌟 Features Implemented
🎨 UI / UX

Neon futuristic design

Fully responsive (mobile + desktop)

Dark mode (default) & Light mode

Smooth Framer Motion animations

Glassmorphism & glow effects

🧭 Navigation

Sticky animated navbar

Mobile hamburger menu

Theme toggle (dark/light)

Smooth transitions

🖼️ Hero Section

Full-screen responsive hero image

Animated title & CTA buttons

Neon branding

⏳ Countdown Timer

Live countdown to event date

Days / Hours / Minutes / Seconds

Dark & light mode compatible

📊 Stats Section

Animated counters

Participants, Colleges, Events, Footfall

Scroll-triggered animation

🎯 Events Section

Hackathon

Coding Contest

UI/UX Challenge

Tech Quiz

Hover glow cards

📝 Registration Form

Event registration form

Axios API integration

MongoDB storage

Success / error handling

🛡️ Admin Panel

Admin login

Protected route

View all registrations

Export registrations to Excel

Logout functionality

Admin URL:

http://localhost:5173/admin-login

🖼️ About Section

About TechVerse Vista

About TIMSCDR

Auto-scrolling vertical image galleries

Dark & light mode support

🤝 Sponsors Section

Grid-based sponsor showcase

4–5 logos visible at once

Responsive & theme compatible

📍 Footer

College address (TIMSCDR)

Google Maps embed

Instagram & LinkedIn links

Dark & light mode friendly

🧪 API Endpoints
Register User
POST /api/register

Fetch Registrations (Admin)
GET /api/register

Admin Login
POST /api/admin/login

🛠️ Tools Used

MongoDB Compass

VS Code

Git & GitHub

Postman (testing APIs)

Chrome DevTools

🚀 Deployment (Future Scope)

Frontend: Vercel / Netlify

Backend: Render / Railway

Database: MongoDB Atlas

👩‍💻 Developed By

Team Vista – TIMSCDR
TechVerse Vista 2026

❤️ Acknowledgements

TIMSCDR Faculty & Management

Open-source community

React & Tailwind ecosystem
