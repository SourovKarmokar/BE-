const express = require("express");
const getAllProductController = require("../../controller/getAllProductController");
const createProductController = require("../../controller/createProductController");
const router = express.Router();

router.get("/getallproduct",getAllProductController);
router.get("/createproduct",createProductController);

module.exports =  router