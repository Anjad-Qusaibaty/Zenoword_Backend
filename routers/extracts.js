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
      const extracts = await Extract.findAll({
        where: { userId },
        include: [{ model: Tag }],
      });

      return response.status(200).send(extracts);
    }
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

router.patch("/edit/:id", async (request, response, next) => {
  try {
    const {
      text,
      author,
      title,
      subtitle,
      page,
      link,
      mediaType,
      imageUrl,
      tags,
      userId,
    } = request.body;

    const received = {
      text: text,
      author: author,
      title: title,
      subtitle: subtitle,
      page: page,
      link: link,
      mediaType: mediaType,
      imageUrl: imageUrl,
      tags: tags,
      userId: userId,
    };
    console.log("from Backend!", received);

    return response
      .status(200)
      .send({ message: "Ok mate! Well received! :D", received: received });
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

module.exports = router;
