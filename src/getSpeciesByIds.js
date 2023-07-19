const data = require('../data/zoo_data');

const getSpeciesByIds = (ids, ida, ido, ide, idi) => {
  const dados = data.species
    .filter((objeto) => objeto.id === ids
  || objeto.id === ida || objeto.id === ido
  || objeto.id === ide || objeto.id === idi);
  return dados.map((objeto) => objeto.residents);
};
// const getSpeciesByIds = (ids, ida, ido, ide, idi) => {
//   const arr = [];
//   const dados = data.species;
//   for(let dado of dados) {
//   if(dado.id === ids || dado.id === ida
//   || dado.id === ido
//   || dado.id === ide || dado.id === idi){
//    arr.push(dado.residents);
//     }
//    }
//   };

module.exports = getSpeciesByIds;
