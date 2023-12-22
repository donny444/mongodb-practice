const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    name: String,
    detail: String,
    date: { type: Date, default: Date.now }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;