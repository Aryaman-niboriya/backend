const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({

    title : String,
    description : String,
    age : Number,
    dob : Date,

})

const helpmodel = mongoose.model("help",helpSchema)

module.exports = helpmodel