const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rescueSchema = new Schema({
    name: String,
    description: String,
    email: String,
    password: String,
    logo: String, 
    location: String
}, {
    timestamps: true
})

const rescue = mongoose.model("Rescue", rescueSchema)

module.exports = rescue
