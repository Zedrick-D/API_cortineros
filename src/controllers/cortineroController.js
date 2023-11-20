// cortineroController.js
const cortineroModel = require('../models/cortineroModel');
const validate = require('../validation/validate');

exports.getAllCortineros = (req, res) => {
  res.send(cortineroModel.getCortineros());
};

exports.createCortinero = (req, res) => {
  const { error } = validate.cortinero(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const newCortinero = cortineroModel.addCortinero(req.body.name);
  res.send(newCortinero);
};


// Implementar las demás funciones de manera similar


exports.getCortineroById = (req, res) => {
  const cortinero = cortineroModel.getCortineroById(parseInt(req.params.id));
  if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');
  res.send(cortinero);
};