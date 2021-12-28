const db = require('../models/model');

const userController = {};



userController.addUser = async (req, res, next) => {
  res.locals.message = "created user";
  return next();
}

userController.loginUser = async (req, res, next) => {
  res.locals.message = "logged in user";
  return next();
}


export default userController;