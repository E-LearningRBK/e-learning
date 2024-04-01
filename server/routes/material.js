const express = require('express');
const router = express.Router();
const { getAllMaterial, getOne, createMaterial, updateMaterial, deleteMaterial } = require('../controllers/material.js')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated.js')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/getAll", getAllMaterial)

router.get("/getOne/:id", getOne)

router.post("/add",isAdminAuthenticated, createMaterial)

router.put("/update/:id",isAdminAuthenticated, updateMaterial)

router.delete("/delete/:id",isAdminAuthenticated, deleteMaterial)

module.exports = router    