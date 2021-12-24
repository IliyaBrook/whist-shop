module.exports = (products) => {

    const counter = products.reduce((accum, item ) => {
        accum[item.productId] = (accum[item.productId] || 0) + 1;
        return accum
    },{})
    const keys= Object.keys(counter).slice(0, 5)
    const values = Object.values(counter).slice(0, 5)

    let countedArray = []
    for (let i = 0;i < keys.length; i++) {
        const key = keys[i]
        const value = values[i]
        const findProducts = products.find(e => e.productId === key)
        if (findProducts) {
            countedArray.push({...findProducts, counter: value})
        }
    }
    return countedArray.slice(0, 5)
}
