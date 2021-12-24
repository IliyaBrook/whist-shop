const { Router } = require('express')
const router = Router()
const Cart = require('../../models/CartProduct')

module.exports = router.get('/getCart', async (req, res) => {
    try {
        const products = await Cart.find()
        if (products) {
            return res.status(200).json({data: products})
        }
    }catch (error) {
        console.log(error)
        return res.json({errro: `get products error: ${error}`})
    }
})