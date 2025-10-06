const mongoose = require('mongoose');
const Counter = require('./Counter');

const productSchema = new mongoose.Schema({
  product_id: { type: String, unique: true },
  name: { type: String, required: true },
  description: String,
  stock_quantity: { type: Number, required: true, min: 0 },
  low_stock_threshold: { type: Number, default: 5 }
});

// Auto-generate product_id
productSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'productId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.product_id = `product-${counter.seq.toString().padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
