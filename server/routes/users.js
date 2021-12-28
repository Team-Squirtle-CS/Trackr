const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');




router.post('/signup', userController.addUser, (req, res) => {
  return res.status(201).json(res.locals);
});


router.get('/login', userController.loginUser, (req, res) => {
  return res.status(200).json(res.locals);
})



module.exports = router;