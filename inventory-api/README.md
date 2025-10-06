# Inventory Management System API

## Description
A backend API to manage products in a warehouse. Supports CRUD operations and inventory management.

## Setup
1. Install dependencies: `npm install`
2. Run MongoDB locally
3. Start server: `npm run dev`

## Endpoints
- `POST /products` - Create product
- `GET /products` - List all products
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `POST /products/:id/increase` - Increase stock
- `POST /products/:id/decrease` - Decrease stock
- `GET /products/low-stock?threshold=5` - List low stock products

## API Documentation
You can test and explore the API endpoints using Swagger UI:

[Open API Documentation](http://localhost:3000/api-docs)

## Tests
Run: `npm test`
