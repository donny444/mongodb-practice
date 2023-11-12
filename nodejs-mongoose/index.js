const mongoose = require('mongoose');
const Blog = require("./model/blog_schema.js")

main().catch(err => console.error(err));

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/test');

    /*
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
    */

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
}