const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const associationSchema = new Schema({
    name: String,
    description: String,
    email: String,
    password: String,
    logo: String, //(get : v => `${root} ${v})
}, {
    timestamps: true
})

const Association = mongoose.model("Association", associationSchema)

module.exports = Association
