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

router.post("/login", async (request, response, next) => {
  try {
    // Get the email and password from the body of the request.
    const { email, password } = request.body;
    // If either the email or the password is missing from the body of the request, return a message.
    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Please provide both email and password" });
    }
    // Find the user in the database that has a matching email
    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Extract,
          include: [{ model: Tag }],
        },
      ],
    });
    // If a user with a matching email is not found, or if the password provided doesn't match the password in the database, return a message.
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }
    if (user.confirmed === false) {
      return response.status(400).send({
        message: "Please confirm your email first, before logging in",
      });
    }
    // Remove the password from the fetched user record to avoid sending it with the response.
    delete user.dataValues["password"];
    // Create a token using Jason Web Tokens, based on the user id.
    const token = toJWT({ userId: user.id });
    //send back the token and the user details (without the password).
    return response.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (request, response) => {
  const { email, password, name } = request.body;
  if (!email || !password || !name) {
    return response
      .status(400)
      .send("Please provide an email, password and a name");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: process.env.User,
        pass: process.env.Pass,
      },
    });
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    const token = toJWT({ userId: newUser.id });
    const Url = `http://localhost:4000/confirmation/${token}`;
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ZenoWord" <zenoword@hotmail.com>', // sender address
      to: email, // list of receivers
      subject: "Email Verification For Zenoword", // Subject line
      //   text: "Hello world?", // plain text body
      html: `<p>We received your request successfully, one last step before you can use ZenoWord</p><a href= ${Url}>Click this link here!</a>`, // html body
    });
    console.log("Message sent: %s", info.messageId);

    return response.status(200).send("Signed up successfully");
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return response
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});
router.get("/confirmation/:token", async (request, response) => {
  try {
    const { userId } = toData(request.params.token);
    await User.update({ confirmed: true }, { where: { id: parseInt(userId) } });
    return response.status(200).send("The email has been verified");
  } catch (e) {
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

router.post("/emailconf", async (request, response) => {
  try {
    const { email } = request.body;

    if (!email) {
      return response.status(400).send({ message: "Please provide the email" });
    }
    // Find the user in the database that has a matching email
    const user = await User.findOne({ where: { email } });
    // If a user with a matching email is not found, or if the password provided doesn't match the password in the database, return a message.
    if (!user) {
      return response.status(400).send({
        message: `There is no account registered under ${email}`,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "Hotmail",
      auth: {
        user: process.env.User,
        pass: process.env.Pass,
      },
    });

    const token = toJWT({ userId: user.id });
    const Url = `http://localhost:3000/patchpw/${token}`;
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ZenoWord" <zenoword@hotmail.com>', // sender address
      to: email, // list of receivers
      subject: "Reset the password for your Zenoword account", // Subject line
      //   text: "Hello world?", // plain text body
      html: `<p>We received your request successfully. Please click on the link below to reset your password:</p><a href= ${Url}>Password Reset</a>`, // html body
    });
    console.log("Message sent: %s", info.messageId);

    return response
      .status(200)
      .send({ message: "Reset Email has been sent", token });
  } catch (e) {
    console.log(error);
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});

router.post("/patchpw", async (request, response) => {
  try {
    const { password, token } = request.body;
    const { userId } = toData(token);
    await User.update(
      { password: bcrypt.hashSync(password, SALT_ROUNDS) },
      { where: { id: parseInt(userId) } }
    );
    return response
      .status(200)
      .send({ message: "The password has been updated" });
  } catch (e) {
    return response
      .status(400)
      .send({ message: "Something went wrong, sorry" });
  }
});
// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  const extract = await Extract.findAll({
    where: { userId: req.user.id },
    include: [{ model: Tag }],
  });
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({
    ...req.user.dataValues,
    extract,
  });
});

module.exports = router;
