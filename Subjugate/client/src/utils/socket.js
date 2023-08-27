```javascript
import io from 'socket.io-client';

let socket;

export const initializeSocket = () => {
  socket = io('http://localhost:5000');

  socket.on('connect', () => {
    console.log('Connected to server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
};

export const sendChatMessage = (message) => {
  socket.emit('chat-message', message);
};

export const sendTradeRequest = (tradeDetails) => {
  socket.emit('trade-request', tradeDetails);
};

export const sendCombatAction = (actionDetails) => {
  socket.emit('combat-action', actionDetails);
};

export const listenForGameUpdates = (updateHandler) => {
  socket.on('game-update', updateHandler);
};
```