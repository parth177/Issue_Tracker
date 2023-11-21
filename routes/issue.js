const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');
router.post('/create', issueController.create);
router.post('/filter', issueController.filter);
router.get('/delete/:id', issueController.delete);

module.exports = router;
