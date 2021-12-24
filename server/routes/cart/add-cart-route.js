const { Router } = require('express')
const router = Router()
const Cart = require('../../models/CartProduct')



module.exports = router.post('/addCart',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            const newCartItem = await new Cart({
                imageUrl: data.img,
                title: data.title,
                price: numberPrice,
                description: data.description,
                purchasedDate: Date.now()
            })
            await newCartItem.save()
            return res.status(200).json({message:'Add to cart success ',data: newCartItem})
        }
    }catch (error){
        console.log(error)
        return res.state(400).json({error: `error add cart: ${error}`})
    }
})