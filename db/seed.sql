
USE employee_trackerDB;

INSERT INTO department (name)
VALUES 
("Marketing"),
("Human Resources"),
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES 
("Manager", 60000, 2),
("Intern", 10000, 1),
("Sales Lead", 100000, 6),
("Salesperson", 80000, 6),
("Lead Engineer", 150000, 3),
("Software Engineer", 120000, 3),
("Accountant", 125000, 4),
("Legal Team Lead", 250000, 5),
("Lawyer", 190000, 5),
("Software Engineer", 120000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Smith", 1, null),
("George", "Glass", 2, 1);

