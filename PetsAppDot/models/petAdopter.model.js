const mongoose = require("mongoose");
//const { ObjectID } = require("bson"); WHY?
const Schema = mongoose.Schema;

const adopterSchema = new Schema({
    idAssociation: ObjectID,
    //virtualChip: IDBCursor, esto en vez de Id
    TypeAnimal: String,
    Race: String,
    Genre: String,
    Age: Number,
    DateBorn: Date,
    Description: String,
    Sterilized: { type: Boolean },
    GalleryImages: String
    
}, {
    timestamps: true
})

const Adopter = mongoose.model("Adopter", adopterSchema)

module.exports = Adopter