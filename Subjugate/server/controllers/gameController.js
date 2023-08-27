const Game = require('../models/Game');
const socket = require('../utils/socket');

exports.createGame = async (req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.status(201).json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        res.status(200).json(game);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.gameUpdate = (gameState) => {
    socket.emit('game-update', gameState);
};