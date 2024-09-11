const express = require("express");
const evaluateController = require("./evaluate");

const router = express.Router();
const api = router.use(evaluateController);

module.exports = router.use("/api", api);
