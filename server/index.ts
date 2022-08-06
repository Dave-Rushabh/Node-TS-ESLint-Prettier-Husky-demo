// collecting the express framework for writing APIs
import express from "express";
import { Request, Response } from "express";
import { employees } from "../DB/index";

// express's instance is created with named 'app'
const app = express();

// for allowing to use the JSON data
app.use(express.json());

// GET API for all the fetching all employees' data
app.get("/all-employees", (req: any, res: any) => {
  res.send(employees);
});

// GET API for fetching employees' data based on ID
app.get("/employee/:id", (req: any, res: any) => {
  const { id } = req.params;
  const filteredEmployee = employees.filter(
    (employee) => employee.id === parseInt(id)
  );
  res.send(filteredEmployee);
});

//POST API for adding new employee is the list
app.post("/add-employee", (req: Request, res: Response) => {
  const employee = {
    id: employees.length + 1,
    employeeName: req.body.employeeName,
    employeeAge: req.body.employeeAge,
    employeePastExperience: req.body.employeePastExperience,
  };
  employees.push(employee);
  res.send(employees);
});

// PUT API for updating exisiting employee's details
app.put("/update-employee/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const filteredEmployee = employees.filter(
    (employee) => employee.id === parseInt(id)
  );
  filteredEmployee[0].employeeName = req.body.employeeName;
  res.send(filteredEmployee);
});

//DELETE API for deleting the employee's details
app.delete("/delete-employee/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const filteredEmployees = employees.filter(
    (employee) => employee.id !== parseInt(id)
  );
  res.send(filteredEmployees);
});

// express server started on port:3000
app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
