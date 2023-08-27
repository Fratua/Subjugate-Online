const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');
const chatController = require('../controllers/chatController');
const tradeController = require('../controllers/tradeController');
const auth = require('../utils/auth');

// User routes
router.post('/user', auth.authenticate, userController.createUser);
router.put('/user/:id', auth.authenticate, userController.updateUser);
router.delete('/user/:id', auth.authenticate, userController.deleteUser);

// Game routes
router.post('/game', auth.authenticate, gameController.createGame);
router.put('/game/:id', auth.authenticate, gameController.updateGame);
router.delete('/game/:id', auth.authenticate, gameController.deleteGame);

// Chat routes
router.post('/chat', auth.authenticate, chatController.sendMessage);

// Trade routes
router.post('/trade', auth.authenticate, tradeController.initiateTrade);
router.put('/trade/:id', auth.authenticate, tradeController.completeTrade);

module.exports = router;