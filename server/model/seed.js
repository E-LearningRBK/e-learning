const Material = require("./material.model.js");
const User = require("./user.model.js");

const courses = require("../../client/data/courses.json");
const users = require("../../client/data/users.json");
const enrollements = require("../../client/data/enrollement.json");

(async () => {
  await (async () => await Material.bulkCreate(courses))();

  await (async () => await User.bulkCreate(users))();

  await (async () => {
    enrollements.forEach(async (item) => {
      const user = await User.findByPk(item.userId);
      await user.setMaterials(item.courses);
    });
  })();
})();
