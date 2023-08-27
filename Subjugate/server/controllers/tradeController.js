const Trade = require('../models/Trade');
const User = require('../models/User');
const Item = require('../models/Item');

exports.initiateTrade = async (req, res) => {
  try {
    const { senderId, receiverId, items } = req.body;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: 'User not found' });
    }

    const trade = new Trade({
      sender: senderId,
      receiver: receiverId,
      items,
      status: 'pending'
    });

    await trade.save();

    res.status(200).json({ message: 'Trade initiated', trade });
  } catch (error) {
    res.status(500).json({ message: 'Error initiating trade', error });
  }
};

exports.completeTrade = async (req, res) => {
  try {
    const { tradeId } = req.body;

    const trade = await Trade.findById(tradeId);

    if (!trade) {
      return res.status(404).json({ message: 'Trade not found' });
    }

    if (trade.status !== 'pending') {
      return res.status(400).json({ message: 'Trade already completed or cancelled' });
    }

    const sender = await User.findById(trade.sender);
    const receiver = await User.findById(trade.receiver);

    trade.items.forEach(async (item) => {
      const itemToTrade = await Item.findById(item);

      if (sender.inventory.includes(itemToTrade._id)) {
        sender.inventory.pull(itemToTrade._id);
        receiver.inventory.push(itemToTrade._id);
      } else {
        receiver.inventory.pull(itemToTrade._id);
        sender.inventory.push(itemToTrade._id);
      }

      await sender.save();
      await receiver.save();
    });

    trade.status = 'completed';
    await trade.save();

    res.status(200).json({ message: 'Trade completed', trade });
  } catch (error) {
    res.status(500).json({ message: 'Error completing trade', error });
  }
};