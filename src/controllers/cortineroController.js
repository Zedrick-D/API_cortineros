const cortineroModel = require('../models/cortineroModel');
const validate = require('../validation/validate');

exports.getAllCortineros = (req, res) => {
  res.send(cortineroModel.getCortineros());
};

exports.createCortinero = (req, res) => {
  if (!cortineroModel.isNameUnique(req.body.name)) {
    return res.status(400).send('El nombre del cortinero ya existe.');
  }

  const { error } = validate.cortinero(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newCortinero = cortineroModel.addCortinero(req.body.name);
  res.send(newCortinero);
};

exports.updateCortinero = (req, res) => {
  const cortinero = cortineroModel.getCortineroById(parseInt(req.params.id));
  if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');

  if (req.body.name !== cortinero.name && !cortineroModel.isNameUnique(req.body.name)) {
    return res.status(400).send('El nombre del cortinero ya está en uso.');
  }

  const { error } = validate.cortinero(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  Object.assign(cortinero, req.body);
  res.send(cortinero);
};

exports.getCortineroById = (req, res) => {
  const cortinero = cortineroModel.getCortineroById(parseInt(req.params.id));
  if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');
  res.send(cortinero);
};

exports.deleteCortinero = (req, res) => {
  const cortinero = cortineroModel.deleteCortinero(parseInt(req.params.id));
  if (!cortinero) {
    return res.status(404).send('El cortinero con ese ID no existe');
  }
  res.send(cortinero);
};