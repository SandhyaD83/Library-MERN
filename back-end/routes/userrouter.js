const express = require("express");
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/usercontroller.js')

router.get('/', getUsers)
router.post('/post', createUser)
router.put('/updateUser/:name', updateUser)
router.delete('/del/:name', deleteUser)
module.exports = router;