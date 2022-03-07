const express = require('express')
const timeout = require('connect-timeout')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3333

const ExceptionHandler = require('./shared/exceptions/Handler')

const Routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(timeout('5s'))

app.use(Routes)

app.use(ExceptionHandler)

app.get('/', (req, res) => {
  res.send('Bem Vindo A Template-Express API NodeJs')
})

app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT}`);
})