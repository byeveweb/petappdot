const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rescueSchema = new Schema({
    name: { type: String },
    rescueOtherId: {type: Schema.Types.ObjectId, ref: 'user'},
    description: { type: String },
    logo: { type: String }, 
    location: { type: String }
}, {
    timestamps: true
})

const rescue = mongoose.model("Rescue", rescueSchema)

module.exports = rescue
