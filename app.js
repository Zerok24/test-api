const express = require("express");

const testRouter = require("./routes/testRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/test", testRouter);

module.exports = app;
