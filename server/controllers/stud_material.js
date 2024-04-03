const Material = require("../model/material.model");
const User = require("../model/user.model");
const { Sequelize, DataTypes } = require("sequelize");
module.exports = {
  //admin/user
  getMaterialsUser: async (req, res) => {
    try {
      const result = await Material.findAll({
        include: {
          model: User,
          where: { id: req.userId },
          attributes: [],
        },
      });
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },

  userIsEnrolled: async (req, res) => {
    try {
      const { materialId } = req.params;
      const user = await User.findByPk(req.userId);
      // Check if user is enrolled in that material
      const result = await user.getMaterials({
        where: { id: materialId },
        includes: { association: "UserMaterial" },
      });

      // conditional respone to see if user is enrolled

      if (result[0]) {
        res.send({ result: true, date: result[0].UserMaterial.createdAt });
      } else {
        res.send({ result: false });
      }
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },

  addMaterialUser: async (req, res) => {
    try {
      const { materialId } = req.params;

      const material = await Material.findByPk(materialId);
      await material.addUser(req.userId);
      res.status(200).send({ message: "User Added to " + material.name });
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
  delMaterialUser: async (req, res) => {
    try {
      const { materialId } = req.body;
      console.log(req.body);
      const delmaterial = await Material.findByPk(materialId);
      const user = await User.findByPk(req.userId);

      await user.removeMaterial(delmaterial);

      res.status(200).send(delmaterial);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },

  getMaterialWithNumStudents: async (req, res) => {
    try {
      const topMaterial = await Material.findAll({
        attributes: [
          "id",
          "name",
          [Sequelize.fn("COUNT", Sequelize.col("Users.id")), "userCount"],
        ],
        include: [
          {
            model: User,
            as: "Users",
            attributes: ["id"],
          },
        ],
        group: ["Users.id", "Material.id"],
        // order: [[Sequelize.literal("enrolledStudents"), "DESC"]],
      });

      res.send(topMaterial);
    } catch (err) {
      console.error("Error fetching top material:", err);
      res.status(500).send("Internal Server Error");
    }
  },
};
