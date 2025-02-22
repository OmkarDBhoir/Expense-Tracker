const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getAllUser);

router.post('/addUser', userController.createUser);

module.exports = router;