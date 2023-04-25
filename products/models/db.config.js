import mysql from "mysql2";
import retry from "retry";

const operation = retry.operation({
  retries: 5,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 60000,
  randomize: true,
});

const dbConfig = {
  host: "myhost",
  port: 3306,
  user: "root",
  password: "123456",
  database: "productdb",
};

let pool;
operation.attempt(function () {
  pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    acquireTimeout: 10000,
    waitForConnections: true,
    waitForConnectionsOnRetry: true,
    retry: {
      count: 5,
      delay: 2000,
    },
  });

  pool.getConnection(function (err, connection) {
    if (operation.retry(err)) {
        console.log('Failed to connect to MySQL database:', err);
        return;
      }
    if (err) {
      console.error("Failed to connect to MySQL database:", err);
      process.exit(1);
    }
    console.log("Connected to MySQL database!");

    const sql =
      "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT)";
    connection.query(sql, (err, result) => {
      if (err) console.log(err);
      else console.log("Table created successfully");
    });
  });
});

export default pool;
