const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMoongose = require("passport-local-mongoose");
const { schema } = require("./review");

const userSchema = Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMoongose);

module.exports = mongoose.model("User", userSchema);