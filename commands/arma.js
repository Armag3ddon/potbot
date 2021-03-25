const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'arma',
	description: 'Arma.',
	filename: 'arma',
	execute(message) {
		const attachment = new MessageAttachment('https://i.imgur.com/dm2gjdA.mp4');

		message.channel.send(attachment);
	},
};