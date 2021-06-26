const { prefix } = require('../config.json');

module.exports = {
	name: 'nsfw',
	description: 'NSFW-Kommandos',
	filename: 'nsfw',
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const data = [];
		const { commands } = message.client;

		data.push(commands.map(function(currentValue) {
			if (!currentValue.nsfw) return;
			if (currentValue.hidden) return;
			return prefix + currentValue.name;
		}).filter(function(element) {
			return element !== undefined;
		}).join(', '));

		message.channel.send(data).then(msg => msg.react('😏'));
	},
};