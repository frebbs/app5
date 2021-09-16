const express = require('express');
const router = express.Router();
const helpers = require('../utils/helpers')

const membersController = require('../controllers/membersController');

router.use(helpers.isAuthenticated)

router.get('/', membersController.getMembersHomePage);
router.get('/profile', membersController.getMembersProfilePage);



module.exports = router;

