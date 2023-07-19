const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species
  .filter((objeto) => ids.includes(objeto.id));
module.exports = getSpeciesByIds;
