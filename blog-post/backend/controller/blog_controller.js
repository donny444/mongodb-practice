const mongoose = require("mongoose");
const Blog = require("../model/blog_model.js");

async function blogController(req, res) {
    const data = await Blog.find({});
    return res.status(200).json(data);
}

module.exports = blogController;