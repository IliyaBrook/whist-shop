const mongoose = require('mongoose')
const { model } = require("mongoose");

const purchasedProducts = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String, required: true},
    price: {type:Number , required: true},
    description: {type:String , required: true},
    purchasedDate: {type: Date}
})
module.exports = model('PurchasedProducts', purchasedProducts)