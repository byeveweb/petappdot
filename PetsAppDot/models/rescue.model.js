const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = require("./user.model")

const rescueSchema = new Schema({
    name: String,
    description: String,
    email: String,
    password: String,
    logo: String, //(get : v => `${root} ${v})
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

const Rescue = mongoose.model("Rescue", rescueSchema)

module.exports = rescue