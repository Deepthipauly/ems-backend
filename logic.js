const db = require("./services/db");

//get all employee

getAllEmployees = () => {
  return db.Employee.find().then((users) => {
    if (users) {
      return {
        status: true,
        statusCode: 200,
        message: users,
      };
    } else {
      return {
        status: false,
        statusCode: 400,
        message: "no data present",
      };
    }
  });
};

viewEmployee = (id) => {
  return db.Employee.findOne({ id }).then((user) => {
    if (user) {
      return {
        status: true,
        statusCode: 200,
        message: user,
      };
    } else {
      return {
        status: false,
        statusCode: 400,
        message: "no data present",
      };
    }
  });
};

removeEmployee = (id) => {
  return db.Employee.deleteOne({ id }).then((data) => {
    if (data) {
      return {
        status: true,
        statusCode: 200,
        message: "employee deleted",
      };
    } else {
      return {
        status: false,
        statusCode: 400,
        message: "no employee",
      };
    }
  });
};

addNewEmployee = (id, name, designation, salary, experience) => {
  return db.Employee.findOne({ id }).then((employee) => {
    if (employee) {
      return {
        status: false,
        statusCode: 400,
        message: "employee already present",
      };
    } else {
      newEmployee = new db.Employee({
        id,
        name,
        designation,
        salary,
        experience,
      });
      newEmployee.save();
      return {
        status: true,
        statusCode: 200,
        message: "new employee added",
      };
    }
  });
};

editEmployee = (id, name, designation, salary, experience) => {
  return db.Employee.findOne({ id }).then((employee) => {
    if (employee) {
      employee.name = name;
      employee.designation = designation;
      employee.salary = salary;
      employee.experience = experience;

      employee.save();

      return {
        status: true,
        statusCode: 200,
        message: "employee data updated",
      }
    } 
    else {
      return {
        status: false,
        statusCode: 400,
        message: "employee not  present",
      };
    }
  });
};

module.exports = {
  getAllEmployees,
  viewEmployee,
  removeEmployee,
  addNewEmployee,
  editEmployee
};
