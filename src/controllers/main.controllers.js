const dataService = require('../service/dataService');

exports.getData = async (req, res) => {
  try {
    const data = await dataService.obtenerData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
};