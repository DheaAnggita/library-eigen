const { Book } = require('../models');
const booksController = {
    async createBook(req, res) {
        try {
            const { code, title, author, stock, is_borrowed } = req.body;
            if(!code || !title || !author || !stock){
                return res.status(400).json({
                    code: 400,
                    message: 'All fields are required',
                    data: null
                });
            }
            const existingBook = await Book.findOne({ where: { code } });
            if (existingBook) {
                return res.status(400).json({
                    code: 400,
                    message: 'Code already exists',
                    data: null
                });
            }
            const book = await Book.create({ code, title, author, stock, is_borrowed });
            return res.status(201).json({
                code: 201,
                message: 'Book created successfully',
                data: book
            });
        } catch (error) {
        return res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
        }
  },
  
    async getBooks(req, res) {
        try {
            const { code, title, author, is_borrowed } = req.query;
            let books;
            if(code) {
                books = await Book.findAll({where: {code}});
            } else if(title) {
                books = await Book.findAll({where: {title}});
            } else if(author) {
                books = await Book.findAll({where: {author}});
            } else if (is_borrowed !== undefined) {
                books = await Book.findAll({where: {is_borrowed}});
            } else {
                books = await Book.findAll();
            }   
            res.status(200).json({
                code: 200,
                message: 'Get Books Success',
                data: books
            });
        } catch (error) {
            res.status(500).json({
            code: 500,
            message: 'Internal server error',
            data: null
        });
        }
    },

    async getBook(req, res) {
        try {
            const book = await Book.findOne({ where: { id: req.params.id } });
            if (!book) {
                return res.status(404).json({
                    code: 404,
                    message: 'Book not found',
                    data: null
                });
            }
            return res.status(200).json({
                code: 200,
                message: 'Get Book Success',
                data: book
            });
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: 'Internal server error',
                data: null
            });
        }
    },

    async putBook(req, res) {
        try {
            const { code, title, author, stock, is_borrowed } = req.body;
            const book = await Book.findByPk(req.params.id);
            if (!book) {
                return res.status(404).json({
                    code: 404,
                    message: 'Book not found',
                    data: null
                });
            }
            if(!code || !title || !author || !stock){
                return res.status(400).json({
                    code: 400,
                    message: 'All fields are required',
                    data: null
                });
            }
            const existingBook = await Book.findOne({ where: { code } });
            if (existingBook) {
                return res.status(400).json({
                    code: 400,
                    message: 'Code already exists',
                    data: null
                });
            }
            await book.update({ code, title, author, stock, is_borrowed });
            return res.status(201).json({
                code: 201,
                message: 'Book updated successfully',
                data: book
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: 'Internal server error',
                data: null
            });
        }
    },

    async deleteBook(req, res) {
        try {
            const book = await Book.findByPk(req.params.id);
            if (!book) {
            return res.status(404).json({
                code: 404,
                message: 'Book not found',
                data: null
            });
            }
            await book.destroy();
            return res.json({
                code: 200,
                message: 'Book deleted successfully',
                data: null
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: 'Internal server error',
                data: null
            });
        }
    },
};

module.exports = booksController;
