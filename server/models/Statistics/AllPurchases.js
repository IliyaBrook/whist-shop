const mongoose = require('mongoose')
const { model } = require("mongoose");

const allPurchases = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String},
    price: {type:Number},
    description: {type:String},
    productId:{type: String},
    createdAt: { type: Date, expires: '43800m', default: Date.now }
})
module.exports = model('AllPurchases', allPurchases)