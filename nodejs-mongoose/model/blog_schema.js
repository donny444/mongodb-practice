const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
        body: String,
        date: Date
    }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const Blog = mongoose.model("Blog", blogSchema);
Blog.watch().on("change", data => console.log(new Date(), data));

module.exports = Blog;