import Product from "../models/productModel.js";

export const create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else
      res.status(200).json({
        status: "success",
        data,
      });
  });
};

export const findAll = (req, res) => {
  const title = req.query.title;

  Product.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    else
      res.status(200).json({
        status: "success",
        data,
      });
  });
};
