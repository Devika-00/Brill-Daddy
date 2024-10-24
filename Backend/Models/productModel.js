const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, // Fixed spelling from "require" to "required"
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        salePrice: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            required: true,
        },
        isListed: {
            type: Boolean,
            default: true, // Fixed spelling from "defualt" to "default"
        },
        quantity: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number, 
            default: 0, 
        },
        color: { 
            type: String, 
            required: true, // Added the color field
        },
        images: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Images" 
        }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
