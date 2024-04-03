const jwt = require("jsonwebtoken");
const User  = require("../model/user.model");

const isAdminAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "invalid Authorization header." });
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.jwt_Secret);
    let id = decodedToken.userId;
    const user = await User.findByPk(id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "not authorized for this action." });
    }
    req.userId = user.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "failed" });
  }
};

module.exports = isAdminAuthenticated;
