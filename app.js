const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
  try {
    const data = await obtenerData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});



const obtenerData = async () => {
  const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/standings?league=239&season=2024',
    qs: { id: '1139' },
    headers: {
      'x-rapidapi-key': '2f92c213d08822d63cd53f6d9ed9ce29',
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };

  const response = await axios(config);
  return response.data;
};