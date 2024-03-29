import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        require: true,
        lowercase: true
    },
    published: {
        type: Boolean,
        default: false
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: Date,
    comments: [{
        user: {
            type: SchemaTypes.ObjectId,
            ref: "User",
            required: true
        },
        content: String,
        votes: Number,
    }]
});

blogSchema.pre("save", function(next) {
    this.updateAt = Date.now();
    next();
})

const Blog = model("Blog", blogSchema);
export default Blog;