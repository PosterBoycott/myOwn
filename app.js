const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')


dotenv.config({path: './config/config.env'})

app = express()

const PORT = process.env.PORT

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', require('./routes/index'))

app.listen(PORT, console.log(`running on port ${PORT} in ${process.env.NODE_ENV}`))
