const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  initiator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  initiatorItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  recipientItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trade', TradeSchema);