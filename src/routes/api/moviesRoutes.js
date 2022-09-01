const { application } = require('express');
const express = require('express');
const controller = require('../../controllers/api/moviesController');
const router = express.Router();


router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;