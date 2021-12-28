const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/applicationController');




router.post('/create-app', applicationController.addApplication, (req, res) => {
  //creates a new application for user
  return res.status(201).json(res.locals);
})

router.patch('/edit-app', applicationController.editApplication, (req, res) => {
  //updates application if user edits
  return res.status(201).json(res.locals);
})

router.delete('/delete-app', applicationController.deleteApplication, (req, res) => {
  //deletes specified application at given ID
  return res.status(201).json(res.locals);
})


module.exports = router;