 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const adopterSchema = new Schema({
     AssociationId: String,
     virtualChip: String,
     TypeAnimal: String,
     Race: String,
     Genre: String,
     Age: Number,
     DateBorn: Date,
     Description: String,
     Sterilized: {type: Boolean, default: true},
     GalleryImages: String

 }, {
     timestamps: true
 })

 const Adopter = mongoose.model("Adopter", adopterSchema)

 module.exports = Adopter