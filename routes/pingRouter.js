const express = require('express');
const router = express.Router();
const pingController = require('../controllers/pingController');

const helpers = require('../utils/helpers');

router.use(helpers.isAuthenticated);


router.post('/create', pingController.postCreatePing);

module.exports = router;