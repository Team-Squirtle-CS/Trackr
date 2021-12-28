const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/applicationController');



router.post('/create-app', applicationController.addApplication, (req, res) => {
  return res.status(201).json(res.locals);
})

router.patch('/edit-app', applicationController.addApplication, (req, res) => {
  return res.status(201).json(res.locals);
})

router.delete('/delete-app', applicationController.addApplication, (req, res) => {
  return res.status(201).json(res.locals);
})


module.exports = router;