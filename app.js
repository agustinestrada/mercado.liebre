const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3692

const rutasMain = require('./routes/mainRoutes')
const rutasUsuarios = require('./routes/usersRoutes')


app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(port,() =>{
    console.log('Levantamos el servidor de Mercado Liebre');
})

app.use('/user', rutasUsuarios)
app.use('/', rutasMain)