const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (animal === undefined) {
    const conta = species.map((objeto) => ({ [objeto.name]: objeto.residents.length }));
    const obj = Object.assign(...conta);
    return obj;
  }
  const chaves = Object.keys(animal);
  const valores = Object.values(animal);
  const filtrarNome = (elementoAnimal) => elementoAnimal.name === valores[0];
  const filtrarSexo = (elementoAnimal) => elementoAnimal.sex === valores[1];
  const conjuntoAnimais = species.find(filtrarNome).residents;
  if (chaves.includes('sex')) {
    return conjuntoAnimais.filter(filtrarSexo).length;
  }
  return conjuntoAnimais.length;
};

module.exports = countAnimals;
