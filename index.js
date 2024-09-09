const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const { get } = require("./handlers/get");
const { post } = require("./handlers/post");
const { del } = require("./handlers/delete");
const { puts } = require("./handlers/put");

app.use(express.json());
app.use(cors());

app.use("/", get);
app.use("/", post);
app.use("/", del);
app.use("/", puts);

app.listen(process.env.PORT, () => {
  console.log(`server started at: http://localhost:${process.env.PORT}`);
});

module.exports = { app };
