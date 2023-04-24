import mysql from "mysql2";

// docker run -p 3306:3306 --name sql01 --network prodnet01 --hostname myhost -e MYSQL_DATABASE=productdb -e MYSQL_ROOT_PASSWORD=123456 -d mysql
// docker run --name prods --network prodnet01 -p 3002:3001 product01 

// create connection
const connection = mysql.createConnection({
  // host: 'myhost',
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
