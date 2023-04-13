const express = require("express");
const router = express.Router();

const { getBooks, createBooks, getAuthors, createAuthor } = require('../controllers/bookcontroller.js')
router.get('/', getBooks)
router.get('/seed', createBooks)
router.get('/author', createAuthor)
router.get('/authors', getAuthors)

module.exports = router;