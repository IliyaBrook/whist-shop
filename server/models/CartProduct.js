const mongoose = require('mongoose')
const { model } = require("mongoose");

const cartProduct = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String, required: true},
    price: {type:Number , required: true},
    description: {type:String , required: true},
    purchasedDate: {type: Date},
    productId:{type: String}
})
module.exports = model('CartProduct', cartProduct)