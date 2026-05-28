const mongoose = require("mongoose");

function dbConnection() {
  const atlasUrl = process.env.DATABASE_URL;
  const localUrl = "mongodb://127.0.0.1:27017/ecommerceapi";

  console.log("Attempting database connection...");

  mongoose
    .connect(atlasUrl)
    .then(() => {
      console.log("✅ Database Connected to MongoDB Atlas");
    })
    .catch((atlasErr) => {
      console.warn("⚠️ MongoDB Atlas connection failed. Trying local database fallback...", atlasErr.message);
      
      mongoose
        .connect(localUrl)
        .then(() => {
          console.log("✅ Database Connected to Local MongoDB");
        })
        .catch((localErr) => {
          console.error("❌ Both MongoDB Atlas and Local MongoDB connections failed.");
          console.error(" Atlas error:", atlasErr.message);
          console.error(" Local error:", localErr.message);
          console.log("🚀 Server will continue to run without an active DB connection.");
        });
    });
}

module.exports = dbConnection;
