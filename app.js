// dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
//database
const sequelize = require('./data/database')

//Routes
const expenseRoutes = require('./routes/expenseRoute')

const app = express()
app.use(cors())
app.use(bodyParser.json({ extended: false }))
// backend api
app.use(expenseRoutes)



// front end
//serving js file statically
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
/////////////////////////////
sequelize.sync().then(result => {
    app.listen(3000);
})
    .catch(err => {
        console.log(err)
    });

