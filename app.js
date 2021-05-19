const express = require('express')
const app = express()
const path = require('path')
const pathViews = path.join(__dirname + '/src/views')
const port = process.env.PORT || 3693


app.use(express.static('public'))

app.listen(port,() =>{
    console.log('Levantamos el servidor de Mercado Liebre');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(pathViews + '/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(pathViews + '/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(pathViews + '/register.html'))
})