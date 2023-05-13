

const express = require("express");
const app = express();
require('dotenv').config();
// const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, ()=>console.log(`Listening on port: 8000`));