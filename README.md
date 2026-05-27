# E-Commerce Backend (BE-)

This is the robust REST API service for the e-commerce application. It is built using Node.js, Express, and MongoDB, and is deployed live on **Render**.

## Technology Stack

- **Runtime**: Node.js (>=18.0.0)
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose
- **Image Hosting**: Cloudinary
- **Authentication**: JSON Web Tokens (JWT) & bcrypt hashing
- **Mailing Service**: Nodemailer (for OTP verification)
- **Payment Gateway**: SSLCommerz

## Project Directory Structure

```
Backend/
├── 7backend start/
│   ├── config/             # DB and Cloudinary setup
│   ├── controller/         # Request handling logic
│   ├── helpers/            # Helper functions (OTP, mailer, etc.)
│   ├── middleware/         # Auth and upload middlewares
│   ├── model/              # Mongoose database schemas
│   ├── route/              # API router files
│   ├── index.js            # Main entry point
│   ├── package.json        # Dependencies & scripts
│   └── render.yaml         # Render deployment blueprint
└── README.md
```

## API Endpoints (Prefix: `/api/v1`)

### Authentication & Users
- `POST /api/v1/auth/registration` - Register a new user
- `POST /api/v1/auth/verify-otp` - Verify email OTP
- `POST /api/v1/auth/login` - Login user/admin

### Category Management
- `GET /api/v1/category/all` - List all categories
- `POST /api/v1/category/create` - Create a new category
- `PUT /api/v1/category/update/:id` - Update a category
- `DELETE /api/v1/category/delete/:id` - Delete a category

### Sub-Category Management
- `GET /api/v1/subcategory/all` - List all sub-categories
- `POST /api/v1/subcategory/create` - Create a sub-category
- `PUT /api/v1/subcategory/update/:id` - Update a sub-category
- `DELETE /api/v1/subcategory/delete/:id` - Delete a sub-category

### Product Management
- `GET /api/v1/product/all` - List all products
- `POST /api/v1/product/create` - Create a product (with image upload to Cloudinary)
- `PUT /api/v1/product/update/:id` - Update a product
- `DELETE /api/v1/product/delete/:id` - Delete a product

### Order Management
- `GET /api/v1/order/all` - List all orders (Admin)
- `POST /api/v1/order/create` - Place a new order
- `POST /api/v1/order/payment` - Initialize SSLCommerz payment gateway

## Local Setup & Installation

1. Navigate to the backend directory:
   ```bash
   cd "7backend start"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables. Create a `.env` file in the `7backend start` directory based on `.env.example`:
   ```env
   DATABASE_URL=your_mongodb_connection_uri
   BASE_URL=/api/v1
   EMAIL_USER=your_email@gmail.com
   EMAIL_APP_PASSWORD=your_gmail_app_password
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_key
   CLOUD_SECRET_KEY=your_cloudinary_secret
   JWT_SECRET=your_jwt_signing_secret
   FRONTEND_URL=http://localhost:5173
   DASHBOARD_URL=http://localhost:5174
   ```

4. Start development server (using Nodemon):
   ```bash
   npm run dev
   ```

5. Start production server:
   ```bash
   npm run start
   ```

## Deploying to Render

The repository contains a `render.yaml` file that sets up all services automatically for Render. You can deploy it by:
1. Connecting your GitHub repository (`SourovKarmokar/BE-`) to Render.
2. Creating a **Web Service** or linking through **Blueprints**.
3. Adding the environment variables in the Render Dashboard.
