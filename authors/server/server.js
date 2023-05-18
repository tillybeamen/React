// 1. import dependencies

const express = require("express")
const app = express()
require('dotenv').config();
const cors = require("cors")

// 2. config
require("./configs/mongoose.config")

// 3. add express config
// make sure these lines are above any app.get or app.post code blocks
app.use(cors())
app.use(express.json()); // recongnize JSON object
app.use(express.urlencoded({extended:true})); // to recognize the incoming Req object as strings/arrays
// 4. routes
// require("./routes/destination.routes")(app)
require("./routes/author.routes")(app)

 // 5. listen to the port
app.listen(8000, () => console.log("Listening to port 8000"))

