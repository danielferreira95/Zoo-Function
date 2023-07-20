const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const filtrarCrianca = (entrant) => entrant.age < 18;
  const contaCrianca = entrants.filter(filtrarCrianca).length;
  const filtrarAdulto = (entrant) => entrant.age >= 18 && entrant.age < 50;
  const contaAdulto = entrants.filter(filtrarAdulto).length;
  const filtrarSenhor = (entrant) => entrant.age >= 50;
  const contaSenhor = entrants.filter(filtrarSenhor).length;
  const obj = (adulto, crianca, senhor) => ({
    adulto,
    crianca,
    senhor,
  });
  return obj(contaAdulto, contaCrianca, contaSenhor);
};

const calculateEntry = (entrants) => {
  if (entrants !== undefined && entrants.length !== undefined) {
    const pessoas = countEntrants(entrants);
    const chaves = Object.keys(pessoas);
    const total = chaves
      .reduce((acumulador, indice) => acumulador + pessoas[indice] * data.prices[indice], 0);
    return total;
  } return 0;
};

module.exports = { calculateEntry, countEntrants };
