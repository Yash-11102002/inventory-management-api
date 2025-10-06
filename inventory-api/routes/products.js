const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - stock_quantity
 *       properties:
 *         name:
 *           type: string
 *           example: "Gaming Laptop"
 *         description:
 *           type: string
 *           example: "High-end gaming laptop with RTX 4070"
 *         stock_quantity:
 *           type: integer
 *           example: 10
 *         low_stock_threshold:
 *           type: integer
 *           example: 5
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', controller.createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 */
router.get('/', controller.getProducts);

/**
 * @swagger
 * /products/low-stock:
 *   get:
 *     summary: Get products with low stock
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: threshold
 *         schema:
 *           type: integer
 *         description: Threshold for low stock
 *     responses:
 *       200:
 *         description: List of products below threshold
 */
router.get('/low-stock', controller.lowStockProducts);

/**
 * @swagger
 * /products/{product_id}:
 *   get:
 *     summary: Get a product by product_id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auto-generated Product ID
 *     responses:
 *       200:
 *         description: Product details
 *       404:
 *         description: Product not found
 */
router.get('/:product_id', controller.getProductById);

/**
 * @swagger
 * /products/{product_id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auto-generated Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */
router.put('/:product_id', controller.updateProduct);

/**
 * @swagger
 * /products/{product_id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auto-generated Product ID
 *     responses:
 *       200:
 *         description: Product deleted
 *       404:
 *         description: Product not found
 */
router.delete('/:product_id', controller.deleteProduct);

/**
 * @swagger
 * /products/{product_id}/increase:
 *   post:
 *     summary: Increase stock of a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auto-generated Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 minimum: 1
 *                 example: 5
 *                 description: Amount to increase stock by
 *     responses:
 *       200:
 *         description: Stock increased
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */
router.post('/:product_id/increase', controller.increaseStock);

/**
 * @swagger
 * /products/{product_id}/decrease:
 *   post:
 *     summary: Decrease stock of a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Auto-generated Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *                 minimum: 1
 *                 example: 3
 *                 description: Amount to decrease stock by
 *     responses:
 *       200:
 *         description: Stock decreased
 *       400:
 *         description: Insufficient stock or bad request
 *       404:
 *         description: Product not found
 */
router.post('/:product_id/decrease', controller.decreaseStock);

module.exports = router;    
