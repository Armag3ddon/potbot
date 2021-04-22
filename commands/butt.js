const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'butt',
	aliases: ['butthole', 'loch', 'poloch', 'arschloch', 'asshole'],
	description: 'XXX',
	filename: 'butt',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'butt', '🍑', true);
	},
};