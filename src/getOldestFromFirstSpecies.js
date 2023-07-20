const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstAnimal = data.employees.find((objeto) => objeto.id === id).responsibleFor[0];
  const objAnimal = data.species.find((especie) => especie.id === firstAnimal).residents;
  return Object.values(objAnimal.sort((a, b) => a.age - b.age)[objAnimal.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
