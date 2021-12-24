const mongoose = require('mongoose')
const { model } = require("mongoose");

const top5Buy = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String, required: true},
    price: {type:Number , required: true},
    description: {type:String , required: true},
    purchasedDate: {type: Date},
    productId:{type: String},
    createdAt: { type: Date, expires: '43800m', default: Date.now }
})
module.exports = model('Top5Buy', top5Buy)