/**
 * @swagger
 * 
 * tags:
 *   name: Books
 *   description: Books APIs
 * 
 */

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: integer
 *               is_borrowed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 * /api/books/getbooks:
 *   get:
 *     summary: Get Books
 *     tags: [Books]
 *     parameters:
 *       - name: code
 *         in: query
 *         schema:
 *           type: string
 *       - name: title
 *         in: query
 *         schema:
 *           type: string
 *       - name: author
 *         in: query
 *         schema:
 *           type: string
 *       - name: is_borrowed
 *         in: query
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Get Books Success
 *       500:
 *         description: Internal server error
 *
 * /api/books/getbook/{id}:
 *   get:
 *     summary: Get book by id
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book id
 *     responses:
 *       200:
 *         description: Get Book Success
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 *
 * /api/books/{id}:
 *   put:
 *     summary: Update book by id
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: integer
 *               is_borrowed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 *
 * /api/books/delete/{id}:
 *   delete:
 *     summary: Delete book by id
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: The book id
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */

router.post('/api/books', booksController.createBook);
router.get('/api/books/getbooks', booksController.getBooks);
router.get('/api/books/getbook/:id', booksController.getBook);
router.put('/api/books/:id', booksController.putBook);
router.delete('/api/books/delete/:id', booksController.deleteBook);

module.exports = router;
