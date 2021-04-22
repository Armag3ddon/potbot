const Sequelize = require('sequelize');

const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/User')(sequelize, Sequelize.DataTypes);
const Messages = require('./models/Message')(sequelize, Sequelize.DataTypes);
const Images = require('./models/Image')(sequelize, Sequelize.DataTypes);

/* Users */

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

Users.getPoints = async function(id) {
	const userItem = await Users.findOne({
		where: { user_id: id },
	});
	if (userItem) {
		return userItem.balance;
	}
	return '0';
};

Users.getBest = async function(amount) {
	const userItems = await Users.findAll({
		order: [['balance', 'DESC']],
		limit: amount,
	});
	return userItems;
};

/* Messages */

Messages.store = async function(message_id) {
	const messageItem = await Messages.findOne({
		where: { message_id: message_id },
	});

	if (messageItem) return false;

	return Messages.create({ message_id: message_id, reaction_message_id: '' });
};

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

/* Images */

Images.enterNew = async function(url, command) {
	return Images.create({ img_url: url, command: command });
};

Images.getForCommand = async function(command) {
	const imageItem = await Images.findAll({
		where: { command: command },
	});
	return imageItem;
};

Images.getUnpostedForCommand = async function(command) {
	const imageItem = await Images.findAll({
		where: { command: command, posted: 0 },
	});
	return imageItem;
};

Images.resetForCommand = async function(command) {
	const imageItems = await Images.findAll({
		where: { command: command },
	});
	for (let i = 0; i < imageItems.length; i++) {
		imageItems[i].posted = 0;
		imageItems[i].save();
	}
};

Images.posted = async function(url) {
	// If the database is empty, url will be undefined
	if (url === undefined) return;

	const imageItem = await Images.findOne({
		where: { img_url: url },
	});

	if (imageItem) {
		imageItem.posted = 1;
		return imageItem.save();
	}
};

module.exports = { Users, Messages, Images };