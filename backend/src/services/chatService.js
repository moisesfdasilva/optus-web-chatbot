const { Chat } = require('../models');

const getAll = async () => {
  const chatList = await Chat.findAll();
  return chatList;
};

const getMessagesByUserId = async (id) => {
  const chatList = await Chat.findAll({
    where: { userId: id },
  });
  return chatList;
}

const addChat = async (id, messages) => {
  const chatList = await Chat.create({ userId: id, messages });
  return chatList;
}

module.exports = { getAll, getMessagesByUserId, addChat };
