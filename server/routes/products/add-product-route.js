const router = require('express').Router()
const Product = require('../../models/ShopProduct')



module.exports = router.post('/addProduct',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            const newProduct = new Product(data)
            console.log('newProduct', newProduct);
            await newProduct.save()
            return res.json({
                response:'Product add successfully', product: newProduct
            })
        }
    }catch (error) {
        console.log('errors')
        console.log(error)
        return res.status(400).json({error: error})
    }
})