const Product = require('../models/Product');

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get product by product_id
exports.getProductById = async (req, res) => {
  const product = await Product.findOne({ product_id: req.params.product_id });
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ product_id: req.params.product_id });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (req.body.stock_quantity < 0) return res.status(400).json({ error: 'Stock cannot be negative' });

    Object.assign(product, req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({ product_id: req.params.product_id });
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json({ message: 'Product deleted' });
};

// Increase stock
exports.increaseStock = async (req, res) => {
  const { amount } = req.body;
  if (amount <= 0) return res.status(400).json({ error: 'Amount must be positive' });

  const product = await Product.findOne({ product_id: req.params.product_id });
  if (!product) return res.status(404).json({ error: 'Product not found' });

  product.stock_quantity += amount;
  await product.save();
  res.json(product);
};

// Decrease stock
exports.decreaseStock = async (req, res) => {
  const { amount } = req.body;
  if (amount <= 0) return res.status(400).json({ error: 'Amount must be positive' });

  const product = await Product.findOne({ product_id: req.params.product_id });
  if (!product) return res.status(404).json({ error: 'Product not found' });

  if (product.stock_quantity < amount) return res.status(400).json({ error: 'Insufficient stock' });

  product.stock_quantity -= amount;
  await product.save();
  res.json(product);
};

// Low stock products
exports.lowStockProducts = async (req, res) => {
  const threshold = req.query.threshold ? parseInt(req.query.threshold) : 5;
  const products = await Product.find({ stock_quantity: { $lt: threshold } });
  res.json(products);
};
