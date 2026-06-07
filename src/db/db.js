const mongoose = require("mongoose");

async function connectdb() {

    await mongoose.connect("mongodb+srv://first-server:CXiriDk6PMNmNj0t@first-server.fce7s9u.mongodb.net/halley")
    
    console.log("connected to db")
}

module.exports = connectdb