/* Send a random string from an array of string to the channel, possibly reacting to the message */

module.exports = {
	execute(message, set, reaction) {
		if (set.length == 0) return undefined;

		const rnd = set[Math.floor(Math.random() * set.length)];

		if (reaction) {
			message.channel.send(rnd).then(msg => msg.react(reaction));
		}
		else {
			message.channel.send(rnd);
		}
		return rnd;
	},
};