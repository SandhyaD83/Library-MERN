const express = require("express");
const router = express.Router();
const Book = require("../models/book.js")
router.get('/', (req, res) => {
    res.send("hello")
})
module.exports = router;