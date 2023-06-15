const express = require('express');
const { getAllBooks, getAllMembers, registerMember, getMemberById } = require('../controllers/controllers');

const router = express.Router();

router.get('/', getAllBooks)
router.get('/allmembers',getAllMembers)
router.post('/members',registerMember)
router.get('/memberbyid/:id',getMemberById)


module.exports = router;
