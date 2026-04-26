# 🛒 E-Commerce React App

A modern e commerce web application built using React, focused on clean architecture, dynamic data handling, and seamless navigation.

---

## 🚀 Overview

This project demonstrates how to build a scalable frontend application by integrating:

- External API data
- Client-side routing
- Global state management

The app fetches product data from a dummy API and displays it in an interactive UI where users can browse products, filter by category, and view detailed product information.

---

## ⚙️ Tech Stack

- React – Component based UI development
- Axios – Fetching product data from API
- React Router DOM – Client side routing and navigation
- Context API – Global state management
- Tailwind CSS – Styling and responsive design

---

## 📦 Features

### 🔹 Product Listing

- Displays all products fetched from API
- Clean card based UI
- Dynamic rendering of product data

### 🔹 Category Filtering

- Filter products based on categories (Beauty, Furniture, Groceries, etc.)
- Dynamic routing for each category

### 🔹 Product Details Page

- View detailed information of a single product
- Includes image, description, rating, price, stock, and return policy

### 🔹 Navigation System

- Seamless routing using React Router
- Nested routing with layout support
- Persistent Navbar across all pages

### 🔹 State Management

- Centralized product data using Context API
- Eliminates prop drilling
- Efficient data sharing across components

---

## 🧠 Key Concepts Implemented

- Component based architecture
- Dynamic routing with URL parameters
- Nested routes using <Outlet />
- Conditional rendering
- API integration using Axios
- Global state management with Context API
- Clean separation of concerns

---

## 📁 Project Structure

```
├── src
│   ├── api
│   │   └── ProductApi.js
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   └── SecondaryNavbar.jsx
│   ├── context
│   │   └── ProductContext.jsx
│   ├── pages
│   │   ├── AllProducts.jsx
│   │   ├── CategoryBasedProduct.jsx
│   │   ├── Layout.jsx
│   │   ├── NotFound.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

```

---

## 🔄 Data Flow

1. Data is fetched from API using Axios
2. Stored globally using Context API
3. Accessed across components using useContext
4. Filtered and displayed based on route parameters

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Nitya-Prakash/Cohort-2.0-React

# Go into the repo
cd Cohort-2.0-React

# Navigate to project folder
cd "Day-18(Practice Project)"

# Install dependencies
npm install

# Start development server
npm run dev

```

## 💡 Conclusion

This project focuses on building a strong React foundation by combining routing, API handling, and global state management. It’s a solid step toward developing real world scalable applications.
