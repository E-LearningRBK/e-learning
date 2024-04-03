const express = require("express");
const router = express.Router();
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
const {
  getMaterialWithNumStudents,
  getMaterialsUser,
  addMaterialUser,
  delMaterialUser,
  userIsEnrolled,
} = require("../controllers/stud_material.js");

router.get("/getmaterials", isUserAuthenticated, getMaterialsUser);

router.get("/hasmaterial/:materialId", isUserAuthenticated, userIsEnrolled);

router.get("/addmaterialuser/:materialId",isUserAuthenticated,addMaterialUser);
router.get("/getAllMaterialUser",getMaterialWithNumStudents);
router.put("/delmaterialuser", isUserAuthenticated, delMaterialUser);

module.exports = router;
