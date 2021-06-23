const express = require('express')
const app = express()
const port = process.env.PORT || 3693

const rutasUsuarios = require('./src/routes/users')
const rutasMain = require('./src/routes/mainRoutes')

app.use(express.static('public'))

app.use('/user', rutasUsuarios)
app.use('/', rutasMain)

app.listen(port,() =>{
    console.log('Levantamos el servidor de Mercado Liebre');
})


