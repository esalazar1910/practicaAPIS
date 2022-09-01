const { application } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/genresController');

router.get('/', controller.list);
router.get('/:id', controller.detail)

module.exports = router;