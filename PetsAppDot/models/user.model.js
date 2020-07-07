const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    avatar: String,
    phone: Number,
    username: String,
    password: String,
    adress: String,
    role: {
        type: String,
        enum: ["ADOPTER", "RESCUE", "ADMIN" ],
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User