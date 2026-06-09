require ("dotenv").config();
const app = require("./src/app")
const connectdb = require('./src/db/db')

connectdb();




app.listen(3003,()=>{
    console.log("server is live on port 3003")
})