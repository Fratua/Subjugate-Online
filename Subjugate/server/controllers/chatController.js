const Message = require('../models/Message');
const socket = require('../utils/socket');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        const message = new Message({
            sender,
            receiver,
            content
        });
        await message.save();
        socket.emit('chat-message', message);
        res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while sending the message.' });
    }
};