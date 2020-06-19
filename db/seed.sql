
USE employee_trackerDB;

INSERT INTO department (name)
VALUES 
("Marketing"),
 ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES 
("Manager", 60000, 2),
 ("Intern", 10000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Smith", 1, null),
("George", "Glass", 2, 1);

