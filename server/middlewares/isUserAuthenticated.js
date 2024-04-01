const jwt = require("jsonwebtoken");
const { User } = require("../model");
const isUserAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "invalid Authorization header." });
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      process.env.jwt_Secret,
      function (err, decoded) {
        req.userId = decoded.userId
      }
    );
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "failed." });
  }
};

module.exports = isUserAuthenticated;
