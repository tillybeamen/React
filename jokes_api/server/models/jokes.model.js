const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }


//     "errors": {
//         "setup": {
//             "message": "Setup is required",
//             "name": "ValidatorError",
//             "properties": {
//                 "message": "Setup is required",
//                 "type": "required",
//                 "path": "setup",
//                 "value": ""
//             },
//             "kind": "required",
//             "path": "setup",
//             "value": ""
//         },
//         "punchline": {
//             "message": "Punchline is required",
//             "name": "ValidatorError",
//             "properties": {
                
//             }
//         }
//     }
// });
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;