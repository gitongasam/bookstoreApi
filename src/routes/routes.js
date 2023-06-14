const express = require('express');
const { getAllBooks } = require('../controllers/controllers');

const router = express.Router()

router.get('/', getAllBooks)

module.exports = router;