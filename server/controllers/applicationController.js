const db = require('../models/model');

const applicationController = {};

applicationController.addApplication = async (req, res, next) => {
  res.locals.message = "created application";
  return next();
}


module.exports = applicationController;