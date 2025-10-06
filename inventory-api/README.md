# Inventory Management System API

## Description
A backend API to manage products in a warehouse. Supports CRUD operations and inventory management.
This API is built using Node.js, Express, and MongoDB


## Setup
### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### Steps
1. Clone the repository:
```bash
2. git clone [https://github.com/Yash-11102002/inventory-management-api.git]
3. cd inventory-api
4. Install dependencies: `npm install`
5. Run MongoDB locally
6. Start server: `npm run dev`

## Endpoints
- `POST /products` - Create product
- `GET /products` - List all products
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product
- `POST /products/:id/increase` - Increase stock
- `POST /products/:id/decrease` - Decrease stock
- GET /products/low-stock?threshold=5 - List low stock products

## Tests
Run: `npm run dev`
first start the npm server 
then only the below swagger api docs work

## API Documentation
You can test and explore the API endpoints using Swagger UI:

Swagger UI is integrated for testing all endpoints easily.
Open the following link in your browser:
[Open API Documentation](http://localhost:3000/api-docs)


