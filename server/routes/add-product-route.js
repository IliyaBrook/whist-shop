const router = require('express').Router()
const Product = require('../models/ShopProduct')



module.exports = router.post('/addProduct',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            const newProduct = new Product(data)
            await newProduct.save()
            return res.json({
                response:'Product add successfully', product: newProduct
            })
        }
        console.log('no data')
    }catch (error) {
        console.log('errors')
        console.log(error)
        return res.json({error: error})
    }
})