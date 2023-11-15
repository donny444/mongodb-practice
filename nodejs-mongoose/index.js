const mongoose = require('mongoose');
const Blog = require("./model/blog_schema.js");
const Book = require("./model/book_schema.js");
const Biography = require("./model/biography_schema.js");
const FileDetails = require("./model/filedetails_schema.js");

main().catch(err => console.error(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');

    const kittySchema = new mongoose.Schema({
        name: String
    })
    
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? 'Meow name is ' + this.name
            : 'I don\'t have a name';
        console.log(greeting);
    };
    
    const Kitten = mongoose.model('Kitten', kittySchema);
    
    const silence = new Kitten({ name: "Silence" });
    await silence.save();
    console.log(silence.name);
    
    const fluffy = new Kitten({ name: "Fluffy"})
    await fluffy.save();
    fluffy.speak();
    
    const kittens = await Kitten.find()
    console.log(kittens);

    const firstBlog = new Blog({
        title: "My First Blog",
        author: "dekchaipluto",
        body: "lorem ipsum dolor that's why he the goat, the GOAT",
        comments: [{
            body: "nice job",
            date: "2020-01-01"
        }],
        date: "2018-11-14",
        hidden: false,
        meta: {
            votes: 299,
            favs: 5
        }
    });
    await firstBlog.save();

    const firstBook = new Book({
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        publicationDate: "2000-09-01",
        genre: "Politics",
        pageCount: 452,
        publisher: "Penguin Books"
    });
    await firstBook.save();

    const firstBiography = new Biography({
        name: "Lionel Messi",
        birthDate: "1987-06-24",
        nationality: "Argentina",
        occupation: "Footballer",
        bioSummary: "GOAT"
    });
    await firstBiography.save();

    const firstFileDetails = new FileDetails({
        fileName: "WIN_20220625_09_00_11_Pro",
        fileSize: 177856,
        fileType: "JPG",
        uploadDate: "2022-06-25T09:00:12Z"
    });
    await firstFileDetails.save();
}