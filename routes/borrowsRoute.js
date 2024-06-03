const express = require('express');
const router = express.Router();
const borrowsController = require('../controllers/borrowsController');

router.post('/api/borrows', borrowsController.createBorrow);
router.put('/api/borrows', borrowsController.returnBook);


module.exports = router;