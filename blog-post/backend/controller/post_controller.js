const mongoose = require("mongoose");
const Blog = require("../model/blog_model.js");

async function postController(req, res) {
    const { title, author, body } = req.body;
    try {
        if(!title || !author || !body) {
            return res.status(406).json({ message: "All input is required"});
        }

        if(title.length > 30) {
            return res.status(406).json({ message: "Title name must be less than 30 characters" });
        }

        if(author.length > 20) {
            return res.status(406).json({ message: "Author name must be less than 20 characters" });
        }

        if(body.length > 100) {
            return res.status(406).json({ message: "Body must be less than 100 characters" });
        }

        const blog = new Blog({
            title,
            author,
            body
        })
        data = await blog.save();

        return res.status(201).json({ message: "Posted Successfully"});
    } catch(err) {
        console.error(err);
    }
}

module.exports = postController;