const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const User = require("./user.model")

const rescueSchema = new Schema({
<<<<<<< HEAD
    name: String,
    description: String,
    email: String,
    password: String,
    logo: String, //(get : v => `${root} ${v})
    user_id: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
=======
    name: { type: String },
    rescueOtherId: {type: Schema.Types.ObjectId, ref: 'user'},
    description: { type: String },
    logo: { type: String }, 
    location: { type: String }
>>>>>>> b367e549a3db156b07ae97b72e2f712de82e8b06
}, {
    timestamps: true
})

const Rescue = mongoose.model("Rescue", rescueSchema)

module.exports = rescue