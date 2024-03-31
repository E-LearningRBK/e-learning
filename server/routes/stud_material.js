const express = require("express");
const router = express.Router();

const {
  getMaterialsUser,
  addMaterialUser,
  delMaterialUser,
  userEnrolled,
} = require("../controllers/stud_material.js");

router.get("/getmaterials/:id", getMaterialsUser);

router.get("/hasmaterial/:userId/:materialId", userEnrolled);

router.post("/addmaterialuser", addMaterialUser);
router.put("/delmaterialuser", delMaterialUser);
module.exports = router;
