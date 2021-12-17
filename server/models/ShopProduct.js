const mongoose = require('mongoose')
const { model } = require("mongoose");

const shopProduct = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String, required: true},
    price: {type:Number , required: true},
    description: {type:String , required: true}
})
module.exports = model('ShopProduct', shopProduct)