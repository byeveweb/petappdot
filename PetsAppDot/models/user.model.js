const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    phone: String,
    role: {
        type: String,
        enum: ["ADOPTER", "RESCUE", "ADMIN"],
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User