# 🍔 Street Fuel - Customer Review & Feedback Platform

Street Fuel is a customer review and feedback management platform designed for food businesses. It allows customers to share their experiences, rate products, and submit feedback while providing administrators with a secure dashboard to manage customer interactions.

---

## 📌 Overview

The platform helps businesses collect valuable customer reviews and feedback in one place. Reviews help improve customer trust, while feedback messages allow customers to directly communicate their suggestions and concerns.

---

## ✨ Features

### Customer Features

* Browse food products
* Submit product reviews
* Give ratings (1–5 stars)
* Share feedback and suggestions
* View customer reviews

### Admin Features

* Secure Admin Login
* JWT Authentication
* Review Management
* Feedback Management
* Delete inappropriate reviews
* Delete unwanted feedback messages
* Dashboard with statistics

---

## 🛠 Technology Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## 🔒 Security Features

* Password hashing using bcryptjs
* JWT-based authentication
* Protected admin routes
* Secure review and feedback management
* Environment variable support for sensitive credentials

---

## 📊 Admin Dashboard

The dashboard provides:

* Total Reviews Count
* Average Rating Calculation
* Review Management
* Feedback Management
* Secure Logout Functionality

---

## 🗄 Database Collections

### Admin

```json
{
  "username": "admin",
  "password": "hashedPassword"
}
```

### Reviews

```json
{
  "productId": "burger",
  "customerName": "Amar",
  "rating": 5,
  "comment": "Amazing Burger"
}
```

### Feedbacks

```json
{
  "name": "Amar",
  "mobile": "9876543210",
  "message": "Food quality was excellent."
}
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/Am4rjeet/Street-Fuel-Review-Feedback-websitee.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔧 Environment Variables

Create a `.env` file inside the server folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🎯 Business Benefits

* Collect genuine customer reviews
* Improve customer engagement
* Receive direct customer feedback
* Build trust through transparency
* Manage customer responses from a centralized dashboard

---

## 🚀 Future Enhancements

* WhatsApp Integration
* Google Maps Integration
* Review Analytics
* Search & Filter Reviews
* Product Management Panel
* Customer Notification System

---

## 👨‍💻 Developed By

**Amarjeet kumar**

Built using React, Node.js, Express.js, MongoDB, JWT Authentication, and Tailwind CSS.

---

## 📜 License

This software is intended for business, educational, and demonstration purposes.
