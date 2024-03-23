const axios = require('axios');

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

module.exports = {
  obtenerData,
};