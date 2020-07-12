const express = require('express'); // o Express aqui ele retorna uma função.
const cors = require('cors');

// Iniciando o app
const app = express(); // Estamos executando essa função dentro da variável app.
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api', require('./src/routes'));


app.listen(3001); // Estamos usando o método listen ligando o servidor na porta 3001.

