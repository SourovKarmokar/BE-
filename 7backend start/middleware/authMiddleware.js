var jwt = require("jsonwebtoken");

function authMiddleWare(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied. Token is required",
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "api2406mern");
    req.userInfo = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}

module.exports = authMiddleWare;
