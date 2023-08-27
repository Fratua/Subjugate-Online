const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  world: {
    type: String,
    required: true,
    unique: true
  },
  regions: [{
    name: String,
    difficulty: Number,
    terrain: String,
    safeHaven: Boolean
  }],
  monsters: [{
    name: String,
    AIbehavior: String,
    boss: Boolean
  }],
  economy: {
    currency: Number,
    marketplaces: [{
      name: String,
      stalls: [{
        owner: String,
        items: [{
          name: String,
          price: Number
        }]
      }]
    }]
  },
  guilds: [{
    name: String,
    members: [String]
  }],
  chat: {
    public: [String],
    private: [String],
    guild: [String]
  }
});

module.exports = mongoose.model('Game', GameSchema);