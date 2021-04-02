const Sequelize = require('sequelize');

const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/User')(sequelize, Sequelize.DataTypes);
const Messages = require('./models/Message')(sequelize, Sequelize.DataTypes);

/* eslint-disable-next-line func-names */
Users.addPoints = async function(user, number) {
	const userItem = await Users.findOne({
		where: { user_id: user },
	});

	if (userItem) {
		userItem.balance += number;
		return userItem.save();
	}

	return Users.create({ user_id: user, balance: number });
};

/* eslint-disable-next-line func-names */
Users.getPoints = async function(id) {
	const userItem = await Users.findOne({
		where: { user_id: id },
	});
	if (userItem) {
		return userItem.balance;
	}
	return '0';
};

/* eslint-disable-next-line func-names */
Messages.store = async function(message_id) {
	const messageItem = await Messages.findOne({
		where: { message_id: message_id },
	});

	if (messageItem) return false;

	return Messages.create({ message_id: message_id, reaction_message_id: '' });
};

/* eslint-disable-next-line func-names */
Messages.addReaction = async function(messageItem, reaction_id) {
	messageItem.reaction_message_id = reaction_id;
	return messageItem.save();
};

Messages.getReactionId = async function(message_id) {
	const messageItem = await Messages.findOne({
		where: { message_id: message_id },
	});

	if (!messageItem) return false;
	return messageItem.reaction_message_id;
};

module.exports = { Users, Messages };