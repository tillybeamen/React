const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
require("./config/mongoose.config");


// Configure Express
app.use(cors());
app.use(express.json() );
app.use(express.urlencoded({ extended: true }));

// Routes & Controller logic(CRUD)
const Router = require("./routes/product.routes");
Router(app);


// Listen to the Port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`));