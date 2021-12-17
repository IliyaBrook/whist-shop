const { Router } = require('express')
const Product = require('../models/ShopProduct')
const router = Router()

module.exports = router.get('/getProducts', async (req, res) => {
    try {
        const product = await Product.find()
        return res.status(200).json(product)
    }catch (e) {
        console.log(e)
        return res.status(404)
    }
})