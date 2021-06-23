const express = require('express')
const app = express()

const rutasUsuarios = require('./src/routes/users')
const rutasMain = require('./src/routes/mainRoutes')

app.use(express.static('public'))

app.listen(port,() =>{
    console.log('Levantamos el servidor de Mercado Liebre');
})


