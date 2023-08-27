```javascript
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const redis = require('redis');
const { initializeSocket } = require('./utils/socket');
const apiRoutes = require('./routes/api');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const redisClient = redis.createClient(config.redis.port, config.redis.host);

app.use(express.json());
app.use('/api', apiRoutes);

initializeSocket(io, db, redisClient);

server.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
});

module.exports = { server, db, redisClient };
```