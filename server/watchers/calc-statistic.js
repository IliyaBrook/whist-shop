const Allpurchases = require('../models/Statistics/AllPurchases')
const getTopSel = require('./calcFunc/top5Sel')
const TopUniqSel = require('../models/Statistics/TopUniqSel')
const Top5Buy = require('../models/Statistics/top5Buy')


module.exports = () => {
    // Allpurchases.watch().on('change', async () => {
    //     const products = await Allpurchases.find()
    //
    //     const allPuProducts = products.map((elem) => ({...elem}))
    //     await Top5Buy.updateMany(getTopSel(allPuProducts))
    //     const filteredArr = allPuProducts.reduce((acc, current) => {
    //         const x = acc.find(item => item.productId === current.productId);
    //         if (!x) {
    //             return acc.concat(current);
    //         } else {
    //             return acc;
    //         }
    //     }, []);
    //     await TopUniqSel.updateMany(filteredArr.slice(0, 5))
    // })
}