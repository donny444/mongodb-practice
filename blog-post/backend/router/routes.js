const express = require("express");
const route = express.Router();
const blogController = require("../controller/blog_controller.js");
const postController = require("../controller/post_controller.js");
const commentController = require("../controller/comment_controller.js");

route.get("/", blogController);
route.post("/post", postController);
route.get("/comment", commentController);

module.exports =  route;