const {Router} = require('express')
const router = Router()
const AllPurchases = require('../../models/Statistics/AllPurchases')
const Cart = require('../../models/CartProduct')

module.exports = router.post('/pay', async (req, res) => {
    try {
        const data = req.body.products
        console.log(data)
        if (data) {
            data.forEach( elem => {
                const wait = new AllPurchases(elem)
                wait.save()
            })
            await Cart.deleteMany()
            return res.status(200).json({message: 'Removing success'})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: `error remove cart: ${error}`})
    }
})