// const bcrypt = require("bcrypt");
// const { toJWT } = require("../auth/jwt");
// const nodemailer = require("nodemailer");
// const authMiddleware = require("../auth/middleware");
// const { SALT_ROUNDS } = require("../config/constants");
// const { toData } = require("../auth/jwt");
// const axios = require("axios");

const { Router } = require("express");
const User = require("../models/").user;
const Extract = require("../models/").extract;
require("dotenv").config();
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

    function check(str) {
      if (
        str.slice(-1) === "," ||
        str.slice(-1) === ";" ||
        str.slice(-1) === "."
      ) {
        return str.substring(0, str.length - 1);
      } else {
        return str;
      }
    }
    const checktags = check(tags);

    const received = {
      text: text,
      author: author,
      title: title,
      subtitle: subtitle,
      page: page,
      link: link,
      mediaType: mediaType,
      imageUrl: imageUrl,
      tags: checktags,
      userId: userId,
    };
    console.log("from Backend!", received);
    const Extracttoupdate = await Extract.findByPk(request.params.id);

    await Extracttoupdate.update({
      text: text,
      author: author,
      title: title,
      subtitle: subtitle,
      page: page,
      link: link,
      mediaType: mediaType,
      imageUrl: imageUrl,
      tags: checktags,
    });

    const extracts = await Extract.findAll({
      where: { userId },
    });

    return response.status(200).send(extracts);
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});
router.post("/create", async (request, response, next) => {
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

    function check(str) {
      if (
        str.slice(-1) === "," ||
        str.slice(-1) === ";" ||
        str.slice(-1) === "."
      ) {
        return str.substring(0, str.length - 1);
      } else {
        return str;
      }
    }
    const checktags = check(tags);

    const received = {
      text: text,
      author: author,
      title: title,
      subtitle: subtitle,
      page: page,
      link: link,
      mediaType: mediaType,
      imageUrl: imageUrl,
      tags: checktags,
      userId: userId,
    };
    console.log("from Backend!", received);

    const allExtracts = await Extract.create({
      text: text,
      author: author,
      title: title,
      subtitle: subtitle,
      page: page,
      link: link,
      mediaType: mediaType,
      imageUrl: imageUrl,
      tags: checktags,
      userId: userId,
    });

    console.log(allExtracts);
    const extracts = await Extract.findAll({
      where: { userId },
    });

    return response.status(200).send(extracts);
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

router.post("/vision", async (request, response, next) => {
  try {
    const { image } = request.body;
    console.log(image);
    const vision = require("@google-cloud/vision");

    // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: "newkapi.json",
    });

    // const fileName = "test.jpg";
    // const testUrl =
    //   "https://i.pinimg.com/originals/de/5f/31/de5f31228ccbdff616e80b08a3fc620c.jpg";
    // Performs text detection on the local file
    const [result] = await client.textDetection(image);
    const detections = result.textAnnotations;

    return response.status(200).send(detections[0].description);
    // return response.status(200).send("Hello vision");
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

module.exports = router;
