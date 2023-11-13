const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({ name: String, type: String },
{
    methods: {
        findSimilarTypes(cb) {
            return mongoose.model('Aninmal').find({ type: this.type }, cb);
        }
    },
    statics: {
        findByName(name) {
            return this.find({ name: new RegExp(name, "i")});
        }
    }
});

const Animal = mongoose.model("Animal", animalSchema);
const dog = new Animal({ type: "dog" });

dog.findSimilarTypes((err, dogs) => {
    console.log(dogs); // woof
})

let animals = await Animal.findByName("fido");
module.exports = Animal;