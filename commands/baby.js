const { MessageAttachment } = require("discord.js");

module.exports = {
	name: 'baby',
	aliases: ['bregor', 'bregorbaby'],
	description: 'Bregorbaby existiert nicht. Bregorbaby:',
	filename: 'baby',
	execute(message) {
		const attachment = new MessageAttachment('https://i.imgur.com/tH6CJCf.png');

		message.channel.send(attachment);
	},
};