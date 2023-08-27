const socketIO = require('socket.io');
const server = require('../server/server.js');

const socket = socketIO(server);

socket.on('connection', (client) => {
    console.log('New client connected');

    client.on('chat-message', (message) => {
        socket.emit('chat-message', message);
    });

    client.on('trade-request', (trade) => {
        socket.emit('trade-request', trade);
    });

    client.on('combat-action', (action) => {
        socket.emit('combat-action', action);
    });

    client.on('game-update', (update) => {
        socket.emit('game-update', update);
    });

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

module.exports = socket;