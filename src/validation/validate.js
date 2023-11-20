const Joi = require('joi');

function cortinero(cortinero) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  return schema.validate(cortinero);
}

module.exports = { cortinero };