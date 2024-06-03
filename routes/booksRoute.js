const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/api/books', booksController.createBook);
router.get('/api/books', booksController.getBooks);
router.get('/api/books/:id', booksController.getBook);
router.put('/api/books/:id', booksController.putBook);
router.delete('/api/books/:id', booksController.deleteBook);

module.exports = router;