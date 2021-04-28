/* Send a random string from an array of string to the channel, possibly reacting to the message */

const { MessageAttachment } = require('discord.js');

module.exports = {
	execute(message, set, reaction) {
		if (set.length == 0) return undefined;

		const rnd = set[Math.floor(Math.random() * set.length)];
		const attachment = new MessageAttachment(rnd);

		console.log(attachment);
		if (reaction) {
			message.channel.send(attachment).then(msg => msg.react(reaction));
		}
		else {
			message.channel.send(attachment);
		}
		return rnd;
	},
};