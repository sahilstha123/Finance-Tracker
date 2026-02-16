# Finance Tracker 💰

A premium, modern full-stack web application designed to help users track their finances with ease and style. Built with the MERN stack (MongoDB, Express, React, Node.js), this project features a high-end UI with glassmorphism, responsive design, and secure authentication.

## 🏗️ Project Structure

The project is divided into two main parts:

- **[Client](./Client)**: The frontend built with React, Vite, and Bootstrap.
- **[Server](./Server)**: The backend built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Bootstrap 5 + Custom Vanilla CSS (Glassmorphism)
- **Icons**: React Icons (Fa, Ai, Bs, Cg, Ci)
- **Routing**: React Router Dom v7
- **Feedback**: React Toastify

### Backend
- **Runtime**: Node.js
- **Framework**: Express 5
- **Database**: MongoDB (Mongoose)
- **Security**: JWT (JSON Web Tokens) & BcryptJS
- **Dev Tools**: Nodemon

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB account/local instance

### 1. Clone the repository
```bash
git clone <repository-url>
cd finance-tracker
```

### 2. Setup Server
```bash
cd Server
npm install
# Create a .env file (see Server/README.md for details)
npm run dev
```

### 3. Setup Client
```bash
cd Client
npm install
npm run dev
```

## ✨ Key Features
- **Modern UI**: Professional glassmorphism and smooth micro-interactions.
- **Secure Auth**: JWT-based login/signup with password visibility toggles.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Header**: Glassmorphic scroll transitions and auth-aware navigation.

---
*Developed with a focus on premium aesthetics and user experience.*
