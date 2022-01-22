const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a Template-Express API' })
})

app.listen(PORT, () => {
  console.log(`Estou rodando na porta ${PORT}`);
})