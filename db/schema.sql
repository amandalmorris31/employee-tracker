DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;
CREATE TABLE department(
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30),
    PRIMARY KEY (id)
);


CREATE TABLE role(
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
	salary DECIMAL,
    department_id INTEGER,
    constraint fk_department foreign key (department_id) references department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
	id INT AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    constraint fk_role foreign key (role_id) references role(id),
    manager_id INTEGER,
    constraint fk_manager foreign key (manager_id) references employee(id),
    PRIMARY KEY (id)
);