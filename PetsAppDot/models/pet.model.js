const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: String,
    description: String,
    adopted: { type: Boolean, default: true},
    type: {
        type: String,
        enum: ['reptile', 'bird', 'fish', 'mammal'],
        default:'mammal'
    }
    
}, {
    timestamps: true
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet
