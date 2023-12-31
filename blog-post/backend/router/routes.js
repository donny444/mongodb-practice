import express from "express";
const route = express.Router();
import blogController from "../controller/blog_controller.js";
import postController from "../controller/post_controller.js";
import commentController from "../controller/comment_controller.js";

route.get("/", blogController);
route.post("/post", postController);
route.post("/comment", commentController);

export default route;