const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [.49, "Price must be at least $0.49"],
        max: [999.99, "Price must be below $1000"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Needs a more detailed description"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema);