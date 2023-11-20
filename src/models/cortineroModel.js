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

function updateCortinero(id, updateInfo) {
  const cortinero = cortineros.find(c => c.id === parseInt(id));
  if (!cortinero) return null;

  Object.assign(cortinero, updateInfo);
  return cortinero;
}

function deleteCortinero(id) {
  const index = cortineros.findIndex(c => c.id === parseInt(id));
  if (index === -1) return null; // No se encontró el cortinero

  const [deletedCortinero] = cortineros.splice(index, 1);
  return deletedCortinero;
}

function isNameUnique(name) {
  return !cortineros.some(c => c.name === name);
}

module.exports = { 
  getCortineros, 
  addCortinero, 
  getCortineroById, 
  updateCortinero, 
  isNameUnique,
  deleteCortinero
 };