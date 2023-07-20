const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees
  .some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (gerenteId) => {
  if (isManager(gerenteId)) {
    employees.filter((employee) => employee.managers
      .includes(gerenteId)).map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
