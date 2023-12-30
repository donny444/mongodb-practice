import "dotenv/config";
import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js";

mongoose.connect(process.env.CONNECTION_STRING);

const donny = await User.create({
    name: "Donny Galaxy",
    email: "donnygalaxy@gamil.com"
});

const johnwidth = new User({
    name: "John Width",
    email: "johnwidth@gamil.com"
});

const blog = new Blog({
    title: "Mongoose Tutorial",
    slug: "mongoose-tutorial",
    published: true,
    author: donny._id,
    content: "This is the Mongoose video tutorial",
    tags: ["tutorial", "database"]
});

const createBlog = await Blog.create({
    title: "John Width 5 Came Out",
    slug: "john-width-5",
    author: user._id,
    content: "John Width 5 OUT NOW on this 32 dec",
    tags: ["tutorial", "database", "another"]
});

const findBlog = await Blog.findById
("65900ba67da3c820cf135f61", "title slug content").exec();

findBlog.published = true;
await findBlog.save();

console.log(findBlog);

const populateBlog = await Blog.findOne({ title: "John Width 5 Came Out" }).populate("author");
console.log(populateBlog);

const whereBlog = await Blog.where("author").equals
("Donny Galax").select("title author");
console.log(whereBlog);

const existBlog = await Blog.exists({ author: "Donny Galax" });
console.log(existBlog);

const deleteBlog = await Blog.deleteMany({});
const deleteUser = await User.deleteMany({});
console.log(deleteBlog);
console.log(deleteUser);