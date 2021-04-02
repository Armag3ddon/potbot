module.exports = {
	name: 'messageReactionAdd',
	execute(messageReaction, user) {
		if (user.bot) return;
		// Disregard self reactions
		// if (messageReaction.message.author.id == user.id) return;

		if (messageReaction.emoji.name == '🍺') {
			messageReaction.message.channel.send('Katsching!');
			console.log(user.id);
			console.log(messageReaction.message.id);
		}
	},
};