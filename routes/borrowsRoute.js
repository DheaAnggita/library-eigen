/**
 * @swagger
 * 
 * tags:
 *   name: Borrows
 *   description: Borrows APIs
 * 
 */

const express = require('express');
const router = express.Router();
const borrowsController = require('../controllers/borrowsController');

/**
 * @swagger
 * /api/borrows:
 *   post:
 *     summary: Create a new borrowed data
 *     tags: [Borrows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               member_id:
 *                 type: integer
 *               book_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Borrow created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 * /api/borrows/returnbook:
 *   put:
 *     summary:  Return Book
 *     tags: [Borrows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               member_id:
 *                 type: integer
 *               book_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Data not found
 *       500:
 *         description: Internal server error
 */

router.post('/api/borrows', borrowsController.createBorrow);
router.put('/api/borrows/returnbook', borrowsController.returnBook);


module.exports = router;