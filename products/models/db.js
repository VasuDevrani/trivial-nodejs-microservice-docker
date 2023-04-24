import mysql from "mysql2";

// create connection
const connection = mysql.createConnection({
  // host: 'localhost',
  // port: 3306,
  user: "root",
  password: "123456",
  database: "productdb",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;

  const sql = 'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT)';
  connection.query(sql, (err, result) => {
    if (err) console.log("table already exist")
    else console.log('Table created successfully');
  });
  console.log("Successfully connected to the mysql database");
});

export default connection;
