const express = require('express');
const router = express.Router();

const rootController = require('../controllers/rootController');
const userController = require('../controllers/userController');

router.get('/', rootController.getIndexPage);
router.get('/login', rootController.getLoginPage);
router.get('/createUser', rootController.getCreateUserPage)

router.post('/createUser', userController.postCreateNewUser)
router.post('/login', userController.postAuthenticateUser);

module.exports = router;

