// index.js

const logger = require('./src/middlewares/logger');
const auth = require('./src/middlewares/auth');
const express = require('express');
const cortinerosRoutes = require('./src/routes/cortineros');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(logger);
app.use(auth);

app.use('/api/cortineros', cortinerosRoutes);

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => console.log(`>>>Escuchando en el puerto ${port}`));



























// const Joi = require('joi');
// require('dotenv').config()
// const express = require('express');
// const app = express();

// app.use(express.json());

// const cortineros = [
//   { id: 1, name: 'diabla' },
//   { id: 2, name: 'aguila' },
//   { id: 3, name: 'normal' },
// ];

// app.get('/api/cortineros', (req, res) => {
//   res.send(cortineros);
// });

// app.post('/api/cortineros', (req, res) => {
//   const { error } = validateCortinero(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
  
//   const cortinero = {
//     id: cortineros.length + 1,
//     name: req.body.name
//   };
//   cortineros.push(cortinero);
//   res.send(cortinero);
// });

// app.put('/api/cortineros/:id', (req, res) => {
//   const cortinero = cortineros.find(c => c.id === parseInt(req.params.id));
//   if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');

//   const { error } = validateCortinero(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
  
//   cortinero.name = req.body.name;
//   res.send(cortinero);
// });

// app.delete('/api/cortineros/:id', (req, res) => {
//   const cortinero = cortineros.find(c => c.id === parseInt(req.params.id));
//   if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');

//   const index = cortineros.indexOf(cortinero);
//   cortineros.splice(index, 1);

//   res.send(cortinero);

// });

// app.get('/api/cortineros/:id/', (req, res) => {
//   const cortinero = cortineros.find(c => c.id === parseInt(req.params.id));
//   if (!cortinero) return res.status(404).send('El cortinero con ese ID no existe');
//   res.send(cortinero);
// });

// function validateCortinero(cortinero) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required()
//   });

//   return schema.validate(cortinero);
// }

// const port = process.env.SERVER_PORT || 3001;
// app.listen(port, () => console.log(`>>>Escuchando en el puerto ${port}`));