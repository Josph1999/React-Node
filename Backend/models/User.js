const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    child: {
        type: Boolean,
        required: true
    },
    english_level: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);