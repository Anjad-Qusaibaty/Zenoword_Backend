// const Tag = require("./models").tag;
// const User = require("./models").user;
// const Extract = require("./models").extract;
const express = require("express");
const Something = require("./models").something;
const app = express();
const Port = process.env.PORT || 4000;

app.use(express.json());

app.listen(Port, console.log(`Listening on port ${Port}`));

// app.get("/extracts", async (request, response, next) => {
//   try {
//     const aConst = await Extract.findAll({ include: [Tag] });
//     response.send(aConst);
//   } catch (error) {
//     console.log("There is an error:", error.message);
//   }
// });
