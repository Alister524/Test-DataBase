require ('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const port = process.env.port || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('api', router)

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Старт сервера на порту - ${port}!`))
    } catch (e) {
        console.log(e.message)
    }
}

start()

// app.get('/', (req, res) => res.send('Hello World!'))
