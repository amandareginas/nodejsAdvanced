const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const covidEstado = require('./src/function/covidEstado')
const covidPais= require('./src/function/covidPais')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/covid-estado', async (req, res)=> {
    const {estado} = req.body
    const resultado = await covidEstado(estado)
    console.log(resultado)
    
    res.render('resultado', {dado: resultado})
})

app.post('/covid-pais', async (req, res)=> {
    const {pais} = req.body
    const resultado = await covidPais(pais)
    console.log(resultado)
    
    res.render('resultadoPais', {dadox: resultado})
})

app.listen(3333)