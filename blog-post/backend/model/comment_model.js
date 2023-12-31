import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const commentSchema = new Schema({
    title: {
        type: String,
        maxLength: 50,
        required: true
    },
    name: {
        type: SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    detail: {
        type: String,
        maxLength: 50,
        required: true
    },
    date: { type: Date, default: Date.now }
})

const Comment = model("Comment", commentSchema);

export default Comment;