# Trendwears - An E-Commerce MERN Project

## Table of Contents
- About the Project
- Features
- Tech Stack
- Getting Started
  - Prerequisites
  - Installation
- Usage
- Folder Structure
- API Endpoints
- Website Hosting

---

## About the Project
Trendwears is a comprehensive **e-commerce platform** built using the MERN stack (MongoDB, Express, React, Node.js). It provides a robust solution for online shopping, featuring **user-friendly interfaces**, **secure authentication**, and **admin functionalities** for managing the store. 

The platform enables users to browse products, manage their cart, and place orders seamlessly, while administrators have full control over product listings and order statuses. The integration of **JWT authentication** ensures a secure environment for all transactions.

The project includes:
- A responsive **frontend** that delivers an intuitive shopping experience.
- A scalable **backend** that supports CRUD operations for users, products, carts, and orders.
- A role-based access **admin panel** that allows separate functionalities for administrators.
- Payment integrations with **Stripe** and **Razorpay** for real-world transaction support.

## Features
- **Authentication**:
  - User registration and login.
  - Passwords are hashed using bcrypt.
  - JWTs are used to secure endpoints.
- **Frontend**:
  - Responsive user interface.
  - React Router for navigation.
- **Backend**:
  - RESTful API design.
  - Middleware for JWT validation and role-based access control.
- **Database**:
  - MongoDB for data storage.
- **Admin Panel**:
  - Add, delete, and update products.
  - View and update the status of orders.
- **User Features**:
  - Create and manage user accounts.
  - Browse products, manage cart, and place orders.
  - View order history and details.

## Tech Stack
### Frontend
- React
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)

### Additional Libraries
- bcrypt
- jsonwebtoken
- dotenv
- multer (for file uploads)

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running locally or a connection string to a MongoDB Atlas instance.
- A code editor, such as VS Code.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AadiYNWA/E-Commerce.git
   cd E-Commerce
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Install dependencies for the admin:
   ```bash
   cd admin
   npm install
   ```

5. Create a `.env` file in the `backend` folder:
   ```env
    MONGODB_URI = ""
    CLOUDINARY_API_KEY = ""
    CLOUDINARY_SECRET_KEY = ""
    CLOUDINARY_NAME = ""
    JWT_SECRET = ""
    ADMIN_EMAIL = "admin@trendwears.com"
    ADMIN_PASSWORD = "qwerty123"
    STRIPE_SECRET_KEY = ""
    RAZORPAY_KEY_SECRET = ""
    RAZORPAY_KEY_ID = ""
   ```

6. Start the backend server:
   ```bash
   cd backend
   npm run server
   ```

7. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

8. Access the application in your browser at `http://localhost:5173`.

---

## Usage
1. **Signup/Login:**
   - New users can register via the signup form.
   - Existing users can log in to access protected routes.

2. **JWT Tokens:**
   - Tokens are generated upon login and stored securely (e.g., in local storage).
   - Protected routes require the token for access.

3. **Admin CRUD:**
   - Add, delete, and update products.
   - Change the status of orders.

4. **User CRUD:**
   - Manage cart and place orders.
   - View order history and details.

---

## Folder Structure
```
E-Commerce
├── backend
|   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── .env
├── frontend
│   ├── assets
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
├── admin
│   ├── assets
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## API Endpoints
### Authentication Routes (User)
- `POST /api/user/register` - Register a new user.
- `POST /api/user/login` - Log in an existing user.
- `POST /api/user/admin` - Log in as admin.

### Product Routes
- `POST /api/product/add` - Add a new product (Admin only).
- `POST /api/product/remove` - Delete a product (Admin only).
- `POST /api/product/single` - Get details of a single product.
- `GET /api/product/list` - Get a list of all products.

### Cart Routes
- `POST /api/cart/get` - Get the user's cart.
- `POST /api/cart/add` - Add an item to the cart.
- `POST /api/cart/update` - Update cart items.

### Order Routes
- `POST /api/order/list` - Get all orders (Admin only).
- `POST /api/order/status` - Update order status (Admin only).
- `POST /api/order/place` - Place a new order.
- `POST /api/order/stripe` - Create a Stripe payment order.
- `POST /api/order/razorpay` - Create a Razorpay payment order.
- `POST /api/order/userorders` - Get a user's order history.
- `POST /api/order/verifyStripe` - Verify Stripe payment.
- `POST /api/order/verifyRazorpay` - Verify Razorpay payment.

---

## Website Hosting
Visit the website at - https://e-commerce-frontend-six-eta.vercel.app/


---