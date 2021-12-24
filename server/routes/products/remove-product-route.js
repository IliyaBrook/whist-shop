const { Router } = require('express');
const router = Router()
const Product = require('../../models/ShopProduct')

module.exports = router.post('/removeProduct',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            await Product.findByIdAndRemove(data.id)
            return res.status(200).json({message:'Remove completed', id: data.id})
        }
    }catch (error){
        console.log(error)
        return res.status(400).json({error:`Error on removing: ${error}`})
    }
})