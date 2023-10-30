const { Product } = require('../models/product');

// Create a new product
async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the product' });
  }
}

// Implement the other methods in a similar manner
