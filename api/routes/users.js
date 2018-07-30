const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const checkAuth = require('../middlewares/check-auth');

router.get('/', userController.index);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/token', userController.token);

router.get('/:id', checkAuth.user, userController.show);

router.delete('/:id', checkAuth.admin, userController.destroy);

module.exports = router;