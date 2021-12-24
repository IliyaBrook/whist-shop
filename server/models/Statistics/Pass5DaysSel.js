const mongoose = require('mongoose')
const { model } = require("mongoose");

const pass5DaysSel = new mongoose.Schema({
    imageUrl: {type: String},
    title: {type: String},
    price: {type:Number},
    description: {type:String},
    productId:{type: String},
    createdAt: { type: Date, expires: '7200m', default: Date.now }
})

module.exports = model('Pass5DaysSelModel', pass5DaysSel)