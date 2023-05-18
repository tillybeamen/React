1. project setup backend
2. 
3. Create folder
4. npm init -y
5. npm i express mongoose cors dotenv nodemon
6. folder structure SERVER (routes, models, controllers, config)
7. server.js & connect to mongoose
8. open two terminals one for server and one for client
9. add to server.js:

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
require("./routes/destination.routes")(app)

 // 5. listen to the port
app.listen(8000, () => console.log("Listening to port 8000"))




1.  create .env file in server folder
2.  add:
        ATLAS_USERNAME=tilly_beamen
        ATLAS_PASSWORD=Teeman12152130
3.  create mongoose.config.js file in configs folder inside server folder
4.  add:
    const mongoose = require('mongoose');

    const dbName = "authorsdb"
    const username = process.env.ATLAS_USERNAME // read variable in .env
    const pw = process.env.ATLAS_PASSWORD // read variable in .env
    const uri = `mongodb+srv://${username}:${pw}@cluster0.yslpjmk.mongodb.net/${dbName}?retryWrites=true&w=majority`

    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

1.  add: "serve": "nodemon server.js" to package.json
2.  run: npm run serve // make sure "Listening to port 8000" "Established a connection to the database"
3.  Define models
    1. create author.model.js file within models folder within server folder
    2. create model from scratch...every wireframe uses different models...dont just copy paste
    3. example: 
    const mongoose = require("mongoose")

    const AuthorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be at least 3 characters"]
        }
    }, {timestamps: true})

    module.exports.Author = mongoose.model('Author', AuthorSchema);

4.   Controller setup
    1. create author.controller.js file within controllers folder within server folder
    2. model is imported like a key which is why key must be in {} to destructure 
    3. example: 
   const {Job} = require = ("../models/job.model")

module.exports.apiTest = (req, res) => {
    res.json("ok")
}

// get all
module.exports.getAll = (req, res) => {
    res.json("ok")
}
// get one
module.exports.getOne = (req, res) => {
    res.json("ok")
}
// create
module.exports.addJob = (req, res) => {
    res.json("ok")
}
// update
module.exports.apiTest = (req, res) => {
    res.json("ok")
}
// delete
module.exports.apiTest = (req, res) => {
    res.json("ok")
}
5.    Connecting routes
    1. create author.routes.js file within routes folder within server folder
    2. type in routes line after line and save periodically. TRUST VSCODE AUTO FILL
    3. routes need to use controllers...import
    4. example: 
   const JobController = require("../controllers/job.controller")

module.exports = (app)=>{
    app.get("/api/testing", JobController.apiTest);
    app.get("/api/jobs", JobController.getAll);
    app.get("/api/jobs/:id" , JobController.getOne);
    app.put("/api/jobs", JobController.addJob);
    app.patch("/api/jobs/:id", JobController.updateJob);
    app.delete("/api/jobs/:id", JobController.deleteJob);
}

1.  FRONTEND SETUP
    1. npx create-react-app
    2. npm i axios react-router-dom
    3. Create views
       1. CreatePage.jsx, DashboardPage.jsx, UpdatePage.jsx, DetailsPage.jsx
       2. rafce into views files to auto populate
    4. set routes
       1. add BrowserRouter to index.js // between React.StrictMode
       2. import {BrowserRouter} from "react-router-dom" // top of page
    5. npm install react-bootstrap bootstrap // this is to install bootstrap
        1.  import 'bootstrap/dist/css/bootstrap.min.css'; // this goes in index.js
    6. delete everything within the header tag in App.js
       1. add h1 tag with text to make sure client side is loading.
       2. change div to className="container mt-5" // This is bootstrap
       3. ******* make sure to import all the views folders at the top of App.js ********
 
 
 2. FRONTEND FULL CRUD SETUP
    1. Dashboard.jsx (getAll)
       1. Get data from API (axios)
       2. Get data on load (useEffect)
       3. Variable change when loading API (useState)
       4. Display array using .map

    2. CreatPage.jsx
       1. Form input (state variables)
       2. Form submit
       3. AFter submit, post it to backend
       4. Logic after create

    3. DetailsPAge.jsx
       1. Get id from params
       2. Use the ID to get data from api on load
       3. Display info on load

    4. UpdatePage.jsx
       1. Get id from params
       2. Use the ID to get data from api
       3. Display info on load
       4. Form input
       5. Send form to API
       6. Logic after create?

    5. Delete with redirect
       1. Get id from params
       2. Send to API to delete
       3. redirect after delete

    6. Delete with updateList
       1. Get id from function
       2. Send to API to delete
       3. updateList after delete