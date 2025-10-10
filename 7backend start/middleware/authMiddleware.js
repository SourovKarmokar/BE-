var jwt = require("jsonwebtoken");

function authMiddleWare(req, res, next) {
  // get the Authorization header from request
  const authHeader = req.headers.authorization;

  // extract the token from "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token, "token");

  // check if token is missing
 

  try {
    // verify token using the secret key
    const decodedToken = jwt.verify(token, "api2406mern");
    console.log(decodedToken);
    req.userInfo = decodedToken;

    // if token is valid, allow request to continue
    next();
  } catch (error) {
    // if token is invalid or expired
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }

   if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied. Token is required",
    });
  }
}

module.exports = authMiddleWare;
