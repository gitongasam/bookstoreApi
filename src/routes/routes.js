const express = require('express');
const { getAllBooks, getBookById, addBook } = require('../controllers/controllers');

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books',addBook)

module.exports = router;
