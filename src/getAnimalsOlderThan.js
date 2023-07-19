const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especie = data.species.filter((objeto) => objeto.name === animal);
  return especie.every((objeto, indice) => objeto.residents[indice].age >= age);
};

module.exports = getAnimalsOlderThan;
