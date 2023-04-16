const express = require("express");
const router = express.Router();

const { getBooks, createBooks, getAuthors, createAuthor, createStatus } = require('../controllers/bookcontroller.js')
router.get('/', getBooks)

router.get('/author', createAuthor)
router.get('/authors', getAuthors)
router.get('/status', createStatus)
router.post('/postdata', createBooks)


module.exports = router;