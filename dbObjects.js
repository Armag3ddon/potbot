const Sequelize = require('sequelize');

const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/Users')(sequelize, Sequelize.DataTypes);
const Messages = require('./models/Message')(sequelize, Sequelize.DataTypes);

/* eslint-disable-next-line func-names */
Users.prototype.addPoints = async function(number) {
	const userItem = await Users.findOne({
		where: { user_id: this.user_id },
	});

	if (userItem) {
		userItem.balance += number;
		return userItem.save();
	}

	return Users.create({ user_id: this.user_id, balance: number });
};

/* eslint-disable-next-line func-names */
Users.prototype.getPoints = function() {
	return Users.findAll({
		where: { user_id: this.user_id },
		include: ['balance'],
	});
};

/* eslint-disable-next-line func-names */
Messages.store = async function(reaction_id) {
	const messageItem = await Messages.findOne({
		where: { message_id: this.message_id },
	});

	if (messageItem) return false;

	return Messages.create({ message_id: this.message_id, reaction_message_id: reaction_id });
};

module.exports = { Users, Messages };