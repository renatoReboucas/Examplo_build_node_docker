const express = require('express');
const PORT = 3335;
const HOST = '0.0.0.0';
const api = express();
api.get('/', (req, res) => {
  res.send(`Aplicação rodando na porta: ${PORT}`+ '\n');
});
api.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);