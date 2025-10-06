const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory Management System API',
      version: '1.0.0',
      description: 'API to manage products and inventory in a warehouse',
    },
  },
  apis: ['./routes/*.js'], // Swagger will read JSDoc comments in routes folder
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
