const Material = require("../model/material.model");
const User = require("../model/user.model");

module.exports = {
  //admin/user
  getMaterialsUser: async (req, res) => {
    try {
      const result = await Material.findAll({
        include: {
          model: User,
          where: { id: req.params.id },
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
      const { userId, materialId } = req.params;

      const user = await User.findByPk(userId);

      // Check if user is enrolled in that material
      const result = await user.getMaterials({
        where: { id: materialId },
        includes: { association: "UserMaterial" },
      });

      // conditional response to see if user is enrolled
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
      const { userId, materialId } = req.body;
      const material = await Material.findByPk(materialId);

      material.addUser(userId);
      res.status(200).send({ message: "User Added" });
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
  delMaterialUser: async (req, res) => {
    try {
      const { userId, materialId } = req.body;
      console.log(req.body);
      const delmaterial = await Material.findByPk(materialId);
      const user = await User.findByPk(userId);

      await user.removeMaterial(delmaterial);

      res.status(200).send(delmaterial);
    } catch (err) {
      console.log(err);
      res.status(404).send(err);
    }
  },
};
