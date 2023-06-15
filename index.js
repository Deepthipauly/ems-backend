const express = require("express");
const server = express();
const cors = require("cors");
const logic = require("./logic");
// frontend and server connect akan
server.use(cors({ origin: "http://localhost:3000" }));
//js to json
server.use(express.json());

server.listen(8000, () => {
  console.log("START: Server start at 8000");
});

//get all employees

server.get("/getEmployees", (req, res) => {
  logic.getAllEmployees().then((result) => {
    res.status(result.statusCode).json(result);
  });
});
server.get("/view_employee/:id", (req, res) => {
  const id = req.params.id;
  logic
    .viewEmployee(id)
    .then((result) => res.status(result.statusCode).json(result));
});

server.get("/delete_employee/:id", (req, res) => {
  const id = req.params.id;
  logic
    .removeEmployee(req.params.id)
    .then((result) => res.status(result.statusCode).json(result));
});

server.post("/add_employee", (req, res) => {
  logic
    .addNewEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience
    ).then((result) => res.status(result.statusCode).json(result));
    
});

server.post("/edit_employee", (req, res) => {
  logic
    .editEmployee(
      req.body.id,
      req.body.name,
      req.body.designation,
      req.body.salary,
      req.body.experience
    ).then((result) => res.status(result.statusCode).json(result));
    
});



