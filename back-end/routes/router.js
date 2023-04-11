const express = require("express");
const router = express.Router();

const { getBooks, createBooks, getNew } = require('../controllers/bookcontroller.js')
router.get('/', getBooks)
router.get('/seed', createBooks)


module.exports = router;