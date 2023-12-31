import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        maxLength: 16,
        required: true
    }
})

const User = model("User", userSchema);

export default User;