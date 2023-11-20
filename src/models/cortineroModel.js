//cortineroModel.js
let cortineros = [
  { id: 1, name: 'diabla' },
  { id: 2, name: 'aguila' },
  { id: 3, name: 'normal' },
];

function getCortineros() {
  return cortineros;
}

function getCortineroById(id) {
  return cortineros.find(c => c.id === parseInt(id));
}

function addCortinero(name) {
  const newCortinero = { id: cortineros.length + 1, name };
  cortineros.push(newCortinero);
  return newCortinero;
}

module.exports = { getCortineros, addCortinero, getCortineroById };