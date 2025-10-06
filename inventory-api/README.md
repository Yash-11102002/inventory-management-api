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

## Tests
Run: `npm test`
