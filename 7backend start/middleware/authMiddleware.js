var jwt = require("jsonwebtoken");

function authMiddleWare(req, res, next) {
  // console.log("Auth Middleware");
  // next()
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token, "token");

  try {
    const decodedToken = jwt.verify(token, "api2406mern");
    console.log(decodedToken);
    next()
  } catch (error) {
    return res.status(501).json({
      success: false,
      message: "Access Denied . Token is required",
    });
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied . Token is required",
    });
  }

 
}
module.exports = authMiddleWare;
