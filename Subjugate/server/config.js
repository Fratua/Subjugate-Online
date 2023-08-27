const mongoose = require('mongoose');
const redis = require('redis');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/subjugate';
const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

const redisClient = redis.createClient(REDIS_URL);
redisClient.on('connect', () => console.log('Redis client connected'));

module.exports = {
  db,
  redisClient
};