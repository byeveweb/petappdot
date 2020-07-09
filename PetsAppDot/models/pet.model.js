const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({

    rescueId: {
        type: Schema.Types.ObjectId,
        ref: "Rescue"
    },
    virtualChip: {
        type: String
    }, // ojo el match: /[A-Z]{2}\d{4}/
    typeAnimal: {
        type: String
    },
    race: {
        type: String
    },
    genre: {
        type: String,
        enum: ["male", "female"]
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    dateBorn: {
        type: Date
    },
    description: {
        type: String
    },
    sterilized: {
        type: Boolean,
        default: true
    },
    galleryImages: {
        type: [String]
    },

}, {
    timestamps: true
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet