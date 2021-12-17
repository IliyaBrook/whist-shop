const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')

app.use(cors())
app.options('*',cors())

app.use(bodyParser.json({extended: true}))

const PORT = process.env.PORT || config.get('port')
if (PORT !== '3000') {
    process.env
}

app.use("/api", require('./server/routes/get-products-route'))
app.use("/api", require('./server/routes/add-product-route'))

if (process.env.NODE_ENV === 'production') {
    console.log('production env')
    app.use("/", express.static(path.join(__dirname, 'whist-shop-client/build')))
    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, 'whist-shop-client/build/index.html'))
    })
}


async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || config.get('mongoUri'))
        server.listen(PORT, () => {
            console.log('AppRouter started on port: ', PORT)
        })

    } catch (e) {
        console.log('Server mongo error', e.message)
        process.exit(1)
    }
}

start().catch(e => console.log('Error by during server starting', e))
