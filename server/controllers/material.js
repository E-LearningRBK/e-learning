const Material = require("../model/material.model");
const { Op } = require("sequelize");

module.exports = {
  //admin/user
  getAllMaterial: async (req, res) => {
    try {
      const result = await Material.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  ///user
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Material.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  //admin
  createMaterial: async (req, res) => {
    try {
      const { name, description, price, date, link } = req.body;
      const result = await Material.create({
        name: name,
        description: description,
        price: price,
        date: date,
        link: link,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  //admin
  updateMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price, date, link } = req.body;
      const result = await Material.update(
        {
          name: name,
          description: description,
          price: price,
          date: date,
          link: link,
        },
        { where: { id: id } }
      );

      res.status(202).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  }, //admin
  deleteMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Material.destroy({ where: { id: id } });
      res.status(204).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  getsearched: async (req, res) => {
    try {
      const { searched } = req.params;
      const result = await Material.findAll({
        where: {
          name: {
            [Op.like]: `%${searched}%`,
          },
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  },
};
