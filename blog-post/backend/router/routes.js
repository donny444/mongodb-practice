const express = require("express");
const route = express.Router();
const blogController = require("../controller/blog_controller.js");
const postController = require("../controller/post_controller.js");

route.get("/", blogController);
route.post("/post", postController);

module.exports =  route;