const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({

    rescueId: {
        type: Schema.Types.ObjectId,
        ref: "Rescue"
    },
    adopterId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adopter: {
        type: Boolean,
        default: false
    },
    virtualChip: {
        type: String
    },
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
    nameImg: {
        type: String
    },
    pathImg: {
        type: String,
        default: '/uploads/image.png'
    },
    originalName: {
        type: String
    }

}, {
    timestamps: true
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet