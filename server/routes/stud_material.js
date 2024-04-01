const express = require("express");
const router = express.Router();
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
const {
  getMaterialsUser,
  addMaterialUser,
  delMaterialUser,
  userIsEnrolled,
} = require("../controllers/stud_material.js");

router.get("/getmaterials/:id", getMaterialsUser);

router.get("/hasmaterial/:userId/:materialId", isUserAuthenticated, userIsEnrolled);

router.post("/addmaterialuser", isUserAuthenticated, addMaterialUser);

router.put("/delmaterialuser", isUserAuthenticated, delMaterialUser);

module.exports = router;
