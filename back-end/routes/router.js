const express = require("express");
const router = express.Router();

const { getBooks, createBooks, getAuthors, createAuthor, updateBook, deleteBook } = require('../controllers/bookcontroller.js')
router.get('/', getBooks)

router.post('/author', createAuthor)
router.get('/authors', getAuthors)

router.post('/post', createBooks)
router.put('/updateBook/:name', updateBook)
router.delete('/del/:name', deleteBook)


module.exports = router;