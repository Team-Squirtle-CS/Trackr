const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



// add user to database 
router.post('/add', 
  userController.userExists, 
  userController.addUser, 
  (req, res) => {
  return res.status(201).json(res.locals);
});




module.exports = router;