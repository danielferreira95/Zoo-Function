const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const especie = data.species.find((objeto) => objeto.name === animal).residents;
  return especie.every((objeto) => objeto.age >= age);
};
console.log(getAnimalsOlderThan('frogs', 2));
module.exports = getAnimalsOlderThan;
