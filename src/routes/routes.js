const express = require('express');

const { getAllBooks, getAllMembers, registerMember, getMemberById } = require('../controllers/controllers');

const router = express.Router();

router.get('/', getAllBooks)
router.get('/allmembers',getAllMembers)
router.post('/members',registerMember)
router.get('/memberbyid/:id',getMemberById)
router.get('/books/borrow/:id', borrowBook)
router.get('/books/return/:id', returnBook)



module.exports = router;
