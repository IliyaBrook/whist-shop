const { Router } = require('express')
const router = Router()
const Cart = require('../../models/CartProduct')

module.exports = router.post('/removeCart',async (req, res) => {
    try {
        const data = req.body
        if (data) {
            await Cart.remove()
            return res.status(200).json({message:'Removing success'})
        }
    }catch (error){
        console.log(error)
        return res.state(400).json({error: `error remove cart: ${error}`})
    }
})