const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');
require("dotenv").config();
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

var encKey = process.env.ENC_KEY;
userSchema.plugin(encrypt, { secret: encKey ,encryptedFields: ['password']});

const user = mongoose.model("studentInfo",userSchema);
module.exports = user;