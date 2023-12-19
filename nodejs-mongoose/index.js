const mongoose = require('mongoose');
const Blog = require("./model/blog_schema.js");
const Book = require("./model/book_schema.js");
const Biography = require("./model/biography_schema.js");
const FileDetails = require("./model/filedetails_schema.js");

main().catch(err => console.error(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            serverSelectionTimeoutMS: 1000,
            ssl: true
        });

        mongoose.connection.on("error", err => {
            logError(err);
        });

        console.log("Connected!");
    } catch(error) {
        console.error(error);
    }
}