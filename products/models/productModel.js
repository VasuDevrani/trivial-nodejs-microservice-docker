// import pool from "../config/db.config.js";
import pool from './db.js'

class Product {
  constructor(products) {
    this.name = products.name;
    this.price = products.price;
  }

  static create(newProduct, result) {
    pool.query("INSERT INTO products SET ?", newProduct, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, { id: res.insertId, ...newProduct });
    });
  }

  static getAll = (title, result) => {
    let query = "SELECT * FROM products";

    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }

    pool.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("products: ", res);
      result(null, res);
    });
  };
}

export default Product;
