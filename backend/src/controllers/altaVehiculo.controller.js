const { altaVehiculoService } = require("../services/altaVehiculo.services");

function altaVehiculoController(req, res) {
  try {
    //data del request:
    const data = req.body;

    //servicio
    const resService = altaVehiculoService(data);

    //respuesta:
    res.json({ msg: resService });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = { altaVehiculoController };
