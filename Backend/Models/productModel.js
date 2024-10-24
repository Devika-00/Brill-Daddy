const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            trim:true,
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
            defualt: true,
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
            required: true, 
        },
        images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Images" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);