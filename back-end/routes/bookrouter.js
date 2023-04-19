const express = require("express");
const router = express.Router();

const { getBooks, getBook, createBooks, updateBook, deleteBook, createUser, getUsers } = require('../controllers/bookcontroller.js')

router.get('/', getBooks)
router.get('/:name', getBook)
router.post('/post', createBooks)

router.put('/updateBook/:name', updateBook)
router.delete('/del/:name', deleteBook)


module.exports = router;