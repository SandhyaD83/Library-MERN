const express = require("express");
const router = express.Router();
const Book = require('../models/book.js')
router.get('/', (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.status(200).json({ allBooks })
    })
})
module.exports = router;