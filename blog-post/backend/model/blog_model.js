import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        maxLength: 30,
        required: true
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    body: {
        type: String,
        maxLength: 100,
        required: true
    },
    comments: [{
        users: {
            type: SchemaTypes.ObjectId,
            ref: "User",
            required: true
        },
        details: {
            type: String,
            maxLength: 50,
            required: true
        }
    }],
    date: { type: Date, default: Date.now }
})

const Blog = model("Blog", blogSchema);

export default Blog;