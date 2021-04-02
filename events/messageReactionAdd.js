const { Users, Messages } = require('../dbObjects.js');

module.exports = {
	name: 'messageReactionAdd',
	async execute(messageReaction, user) {
		if (user.bot) return;
		// Disregard self reactions
		// if (messageReaction.message.author.id == user.id) return;

		if (!messageReaction.message.guild) return;
		if (messageReaction.message.guild != process.env.CHGW_ID) return;

		if (messageReaction.emoji.name == '🍺') {
			// Store message id in db
			const store = await Messages.store(messageReaction.message.id);
			// Message already present in database
			if (!store) {
				const reaction_id = await Messages.getReactionId(messageReaction.message.id);
				if (!reaction_id || reaction_id == '') {
					// A rare occurences: a new reaction has arrived and the reaction message was not yet sent: do nothing in reaction message
					return Users.addPoints(messageReaction.message.author.id, 1);
				}
				try {
					messageReaction.message.channel.messages.fetch({ around: reaction_id, limit: 1 })
						.then(messages => {
							let points = messages.first().toString().match(/\((.*)\)/)[1];
							points = parseInt(points);
							points += 1;
							messages.first().edit('Katsching! (' + points + ')');
						});
				}
				catch(error) {
					console.log(error);
				}
				Users.addPoints(messageReaction.message.author.id, 1);
			}
			else {
				Users.addPoints(messageReaction.message.author.id, 1);
				messageReaction.message.channel.send('Katsching! (1)').then(function(message) {
					Messages.addReaction(store, message.id);
				});
			}
		}
	},
};