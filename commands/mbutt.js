const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'mbutt',
	aliases: ['mannvonhinten', 'mannpo', 'kerl'],
	description: 'XXX',
	filename: 'mbutt',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'mbutt', '🍑', true);
	},
};