const express = require('express');

const { getAllBooks, getAllMembers, registerMember, getMemberById } = require('../controllers/controllers');

const router = express.Router();

router.get('/books', getAllBooks)
router.get('/allmembers',getAllMembers)
router.post('/members',registerMember)
router.get('/memberbyid/:id',getMemberById)
router.get('/books/borrow/:id', borrowBook)
router.get('/books/return/:id', returnBook)
router.get('/books', getAllBooks)
module.exports = router;
