const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  (!employeeName ? {} : data.employees
    .filter((objeto) => objeto.firstName === employeeName
  || objeto.lastName === employeeName));
module.exports = getEmployeeByName;
