const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
router.post('/create', projectController.create);
router.get('/delete/:id', projectController.delete);
router.get('/view/:id', projectController.viewIssue);
module.exports = router;
