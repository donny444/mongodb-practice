const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    }
}, {
    virtuals: {
        fullName: {
            get() {
                return this.name.first + " " + this.name.last;
            }
        }
    }
});

const Person = mongoose.model("Person", personSchema);

const tanadorn = new Person({
    name: { first: "Tanadorn", last: "Rachatapeeti"}
});
//tanadorn.save();

console.log(tanadorn.fullName);

module.exports = Person;