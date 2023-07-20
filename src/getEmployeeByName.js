const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  function encontraFuncionario(employee) {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
  }
  const funcionario = data.employees.find(encontraFuncionario);
  return funcionario === undefined ? {} : funcionario;
};
console.log(getEmployeeByName('Stephanie'));
console.log(getEmployeeByName('Strauss'));
module.exports = getEmployeeByName;
