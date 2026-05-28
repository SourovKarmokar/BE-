require('dotenv').config();
const express = require('express');
const cors = require("cors");
const route = require('./route');
const dbConnection = require('./config/dbConnection');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// CORS — allow both local dev and deployed frontends
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
  "http://localhost:5177",
  "http://localhost:5178",
  "http://localhost:5179",
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    // In development allow all
    if (process.env.NODE_ENV !== "production") return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB
dbConnection();

// Routes
app.use(route);

// SSLCommerz success/fail/cancel redirects
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5174";

app.post("/success", (req, res) => {
  res.redirect(`${FRONTEND_URL}/paymentsuccess`);
});

app.post("/fail", (req, res) => {
  res.redirect(`${FRONTEND_URL}/cart`);
});

app.post("/cancel", (req, res) => {
  res.redirect(`${FRONTEND_URL}/cart`);
});

// Static uploads
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
