 const mongoose = require("mongoose");

 const Schema = mongoose.Schema;

 const User = require('./user.model')


 const adopterSchema = new Schema({
     name: String,
     email: String,
     phone: Number,
     user_id: [{
         type: Schema.Types.ObjectId,
         ref: 'User'
     }]
 }, {
     timestamps: true
 })

 const Adopter = mongoose.model("Adopter", adopterSchema)

 module.exports = Adopter