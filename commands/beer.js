module.exports = {
	name: 'bier',
	aliases: ['beer', 'äppler', 'saufn'],
	description: 'Saufn, eh!',
	execute(message, args) {
		message.channel.send(':beers:');
	},
};