const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    avatar: String,
    phone: Number,
    username: String,
    password: String,
    role: {
        type: String,
        enum: ["GUEST", "ASSOCIATION", "ADMIN"],
        default: "GUEST",
    },
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User