const express = require("express");
const router = express.Router();
const { getAuthors, createAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorcontroller.js')
router.get('/', getAuthors)
router.post('/post', createAuthor)
router.put('/updateAuthor/:firstname', updateAuthor)
router.delete('/del/:firstname', deleteAuthor)
module.exports = router;