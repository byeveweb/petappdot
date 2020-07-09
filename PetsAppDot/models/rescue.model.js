const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = require("./user.model")

const rescueSchema = new Schema({
            name: {
                type: String
            },
            rescueOtherId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            description: {
                type: String
            },
            logo: {
                type: String
            },
    location: {
        type: String
    }
}, {
    timestamps: true
})

const Rescue = mongoose.model("Rescue", rescueSchema)

module.exports = Rescue