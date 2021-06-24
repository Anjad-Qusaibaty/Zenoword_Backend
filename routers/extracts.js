const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models/").user;
const Extract = require("../models/").extract;
const Tag = require("../models/").tag;
const nodemailer = require("nodemailer");
const authMiddleware = require("../auth/middleware");
require("dotenv").config();
const { SALT_ROUNDS } = require("../config/constants");
const { toData } = require("../auth/jwt");

const router = new Router();

router.post("/delete/:id", async (request, response, next) => {
  try {
    const { userId } = request.body;
    const Extracttodelete = await Extract.findByPk(request.params.id);

    if (!Extracttodelete) {
      response
        .status(400)
        .send(`There is no extract with id ${request.params.id}`);
    } else {
      await Extracttodelete.destroy();

      //   const user = await User.findOne({
      //     where: { email },
      //     include: [
      //       {
      //         model: Extract,
      //         include: [{ model: Tag }],
      //       },
      //     ],
      //   });
      //   delete user.dataValues["password"];
      //   const token = toJWT({ userId: user.id });

      const extracts = await Extract.findAll({
        where: { userId },
        include: [{ model: Tag }],
      });
      console.log(extracts);

      return response.status(200).send(extracts);
    }
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

module.exports = router;
