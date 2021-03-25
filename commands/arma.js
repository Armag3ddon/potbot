const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'arma',
	description: 'Arma.',
	filename: 'arma',
	execute(message) {
		message.channel.send('https://i.imgur.com/dm2gjdA.mp4');
	},
};