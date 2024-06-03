const { Borrow, Member, Book } = require('../models');
const { Op } = require("sequelize");
const borrowsController = {
    async createBorrow(req, res) {
        try {
            const { member_id, book_id} = req.body;
            if(!member_id || !book_id){
                return res.status(400).json({
                    code: 400,
                    message: 'All fields are required',
                    data: null
                });
            }
            const member = await Member.findByPk(member_id);
            if (!member) {
                return res.status(404).json({
                    code: 404,
                    message: 'Member not found',
                    data: null
                });
            }
            const currentDate = new Date();
            const borrowedMember = await Borrow.findAll({
                where: {
                    member_id: member_id,
                    return_date: {
                        [Op.not]: null
                    }
                }
            });
            borrowedMember.forEach(borrow => {
                if (borrow.return_date > borrow.expired_date) {
                    const threeDaysAgo = new Date(currentDate.getTime() - (3 * 24 * 60 * 60 * 1000));
                    if (borrow.return_date > threeDaysAgo) {
                        return res.status(400).json({
                            code: 400,
                            message: 'Member is currently under penalty and banned from borrowing',
                            data: null
                        });
                    }
                }
            });
            const book = await Book.findByPk(book_id);
            if (!book) {
                return res.status(404).json({
                    code: 404,
                    message: 'Book not found',
                    data: null
                });
            }
            if (book.is_borrowed) {
                return res.status(400).json({
                    code: 400,
                    message: 'Book is already borrowed',
                    data: null
                });
            }
            const borrowedBooks = await Borrow.findAll({
                where: {
                    member_id: member_id,
                    return_date: null 
                }
            });
            if (borrowedBooks.length > 1) {
                return res.status(400).json({
                    code: 400,
                    message: 'Member has already borrowed more than one book',
                    data: null
                });
            }
            const borrowed_date = new Date();
            const expired_date = new Date(borrowed_date.getTime() + (7 * 24 * 60 * 60 * 1000));
            const borrow = await Borrow.create({ member_id, book_id, borrowed_date, expired_date });
            const borrowedBooksCount = await Borrow.count({
                where: {
                    book_id: book_id,
                    return_date: null
                }
            });
            if (book && borrowedBooksCount >= book.stock) {
                await Book.update({ is_borrowed: true }, {
                    where: {
                        id: book_id
                    }
                });
            }
            return res.status(201).json({
                code: 201,
                message: 'Borrow created successfully',
                data: borrow
            });
        } catch (error) {
            return res.status(500).json({
                code: 500,
                message: 'Internal server error',
                data: null
            });
        }
    },

    async returnBook(req, res) {
        try {
            const { member_id, book_id } = req.body;
            if (!member_id || !book_id) {
                return res.status(400).json({
                    code: 400,
                    message: 'All fields are required',
                    data: null
                });
            }
            const member = await Member.findByPk(member_id);
            if (!member) {
                return res.status(404).json({
                    code: 404,
                    message: 'Member not found',
                    data: null
                });
            }
            const book = await Member.findByPk(book_id);
            if (!book) {
                return res.status(404).json({
                    code: 404,
                    message: 'Book not found',
                    data: null
                });
            }
            const borrow = await Borrow.findOne({
                where: {
                    member_id: member_id,
                    book_id: book_id,
                    return_date: null
                }
            });
            if (!borrow) {
                return res.status(404).json({
                    code: 404,
                    message: 'Data not found. Make sure member_id and book_id must match',
                    data: null
                });
            }
            borrow.return_date = new Date();
            await borrow.save();
            await Book.update({ is_borrowed: false }, {
                where: {
                    id: book_id
                }
            });
            if (borrow.return_date > borrow.expired_date) {
                return res.status(200).json({
                    code: 200,
                    message: 'Book returned successfully with a penalty of up to 3 days',
                    data: borrow
                });
            }
            return res.status(200).json({
                code: 200,
                message: 'Book returned successfully',
                data: borrow
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                code: 500,
                message: 'Internal server error',
                data: null
            });
        }
    }
};

module.exports = borrowsController;
