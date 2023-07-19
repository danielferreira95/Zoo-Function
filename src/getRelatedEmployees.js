const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const grupo = [stephanieId, olaId, burlId];
const isManager = (...id) => data.employees
  .some((objeto) => objeto.id === id.filter((i) => i));
console.log(isManager(grupo));
const getRelatedEmployees = (managerId) => {
};

module.exports = { isManager, getRelatedEmployees };
