const express = require("express");
const Cors = require("cors");
const { PORT } = require("./config/constants");
const app = express();
app.listen(PORT, console.log(`Listening on port ${PORT}`));
const authRouter = require("./routers/auth");

//   express.json(): is a body-parser to read the request.body of JSON requests
//   docs: https://expressjs.com/en/api.html#express.json
app.use(express.json());

app.use(Cors());

// app level router for login and signing up
app.use("/", authRouter);
