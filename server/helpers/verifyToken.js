const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

let verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified.user;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
module.exports = verifyToken;
