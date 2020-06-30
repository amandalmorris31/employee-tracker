const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "mysqlelvisp31",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  addRole();
});

function viewDepartment()
{
    console.log("Selecting all department...\n");
    connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
 
    
    // for(var i=0; i<res.length;i++)
    // {
    //     console.log(res[i].name);
    // }


  }
);
}
function viewRoles()
{
    console.log("Selecting all roles...\n");
    connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    // for(var i=0; i<res.length;i++)
    // {
    //     console.log(res[i].title);
    //     console.log(res[i].salary);
    //     console.log(res[i].department_id);
    // }

  });
}
function viewEmployees(){
  {
    console.log("Selecting all employees...\n");
    connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    // for(var i=0; i<res.length;i++)
    // {
    //     console.log(res[i].first_name);
    //     console.log(res[i].last_name);
    //     console.log(res[i].role_id);
    //     console.log(res[i].manager_id);
    // }

  });
}
}

function addDepartment(){
  //1. get user input
  inquirer
    .prompt([
      {
        type: "choice", 
        name: "deptName",
        message: "What department name would you like to add?",
   
      },

    ])
    .then((data) => {
      console.log(data)
      console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO department SET ?",
      {
        name: data.deptName,

      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        console.log("department updated")
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
    });

  //2. add to database

    

}

//this function will add an action to the database
const addItems = () => {
  inquirer
    .prompt([
      {
        type: "list", 
        name: "action",
        message: "What would you like to do?",
        choices: ["View all employees","View all employees by department","View all employees by manager", "Add employee", "Remove employee", "Update employee role", 
        "Update employee manager"]
      },

    ])
    .then((data) => {
      connection.query(
        "INSERT INTO items SET ?",
        {
          name: data.item,
          importance: data.importance,
        },
        (err) => {
          if (err) throw err;
          console.log(`Item ${data.item} has been added!!!`);
          viewItems();
        }
      );
    });
};

async function addRole(){
  //1. get user input
  // var department= await viewDepartment();
  // console.log(department)
  // mangerID= department.map(
  //   ({id, name}) =>
  //   ({name:name, value:id})
  //   );


  //console.log("department: "+mangerID)

  inquirer
    .prompt([
      {
        type: "choice", 
        name: "title",
        message: "What title would you like to add?",
   
      },
      {
        type: "choice", 
        name: "salary",
        message: "What salary would you like to add?",
   
      },
      {
        type: "choice", 
        name: "department_id",
        message: "What department id would you like to add?",
    
   
      },

    ])
    .then((data) => {
      console.log(data)
      console.log("Inserting a new role...\n");
    var query = connection.query(
      "INSERT INTO role SET ?",
      {
        title: data.title, 
        salary: data.salary,
        department_id: data.department_id,

      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        console.log("department updated")
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
    });

}
function addEmployee(){}

function updateEmployeeRole(){}

// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }



// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
