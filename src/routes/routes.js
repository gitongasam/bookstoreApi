const express = require('express');
const { getAllBooks, getAllMembers, registerMember, getMemberById } = require('../controllers/controllers.js');

const router = express.Router()

router.get('/books', getAllBooks)
router.get('/members',getAllMembers)
router.post('/members',registerMember)
router.get('/members/:id', getMemberById);



module.exports = router;