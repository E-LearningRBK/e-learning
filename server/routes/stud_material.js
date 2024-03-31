const express = require("express");
const router = express.Router();

const {
  getMaterialsUser,
  addMaterialUser,
  delMaterialUser,
  userIsEnrolled,
} = require("../controllers/stud_material.js");

router.get("/getmaterials/:id", getMaterialsUser);

router.get("/hasmaterial/:userId/:materialId", userIsEnrolled);

router.post("/addmaterialuser", addMaterialUser);
router.put("/delmaterialuser", delMaterialUser);
module.exports = router;
