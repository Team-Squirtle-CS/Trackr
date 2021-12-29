const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');




router.post('/add', userController.userExists, userController.addUser, (req, res) => {
  return res.status(201).json(res.locals);
});




module.exports = router;