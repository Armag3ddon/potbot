module.exports = {
	name: 'bier',
	aliases: ['beer', 'äppler', 'saufn'],
	description: 'Saufn, eh!',
	filename: 'beer',
	execute(message, args) {
		message.channel.send(':beers:');
	},
};