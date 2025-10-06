const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const swaggerSetup = require('./swagger');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/products', productRoutes);

swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
