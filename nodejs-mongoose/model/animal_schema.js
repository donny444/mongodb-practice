const mongoose = require("mongoose");

// define a schema
const animalSchema = new mongoose.Schema({ name: String, type: String },
{
    // Assign a function to the "methods" object of our animalSchema through schema options
    // By following this approach, there is no need to create a seperate TS type to define the type of the intance functions.
    methods: {
        findSimilarTypes(cb) {
            return mongoose.model('Aninmal').find({ type: this.type }, cb);
        }
    }
});

// Or, assign a function to the "methods" object of our animalSchema
/*
animalSchema.methods.findSimilarTypes = function(cb) {
    return mongoose.model("Animal").find({ type: this.type }, cb);
};
*/

const Animal = mongoose.model("Animal", animalSchema);
const dog = new Animal({ type: "dog" });

dog.findSimilarTypes((err, dogs) => {
    console.log(dogs); // woof
})

module.exports = Animal;