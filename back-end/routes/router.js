const express = require("express");
const router = express.Router();

const { getBooks, createBooks, getNew, createAuthor } = require('../controllers/bookcontroller.js')
router.get('/', getBooks)
router.get('/seed', createBooks)
router.get('/author', createAuthor)


module.exports = router;