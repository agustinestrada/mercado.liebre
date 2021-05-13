const express = require('express')
const app = express()
const path = require('path')
const pathViews = path.join(__dirname + '/src/views')

app.use(express.static('public'))

app.listen(3693,() =>{
    console.log('Levantamos el servidor de Mercado Liebre');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(pathViews + '/home.html'))
})