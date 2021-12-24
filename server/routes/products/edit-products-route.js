const { Router } = require('express')
const router = Router()
const Product = require('../../models/ShopProduct')

module.exports = router.post('/editProduct',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            await Product.findByIdAndUpdate(data.id,{$set: {title:data.title, price:data.price}})
            return res.status(200).json({message:'Edit completed', id:data.id})
        }
    }catch (error){
        return res.status(400).json({error:`Editing error: ${error}`})
    }
})