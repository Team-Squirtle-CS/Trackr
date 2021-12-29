const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// // get userId (PK for user table) from GoogleId 
// router.get('/userId', 
//   userController.userExists,
//   userController.addUser, 
//   userController.getUserId
//   (req, res) => {

// }); 

// add user to database 
router.post('/add', 
  userController.userExists, 
  userController.addUser, 
  (req, res) => {
  return res.status(201).json(res.locals);
});




module.exports = router;