const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'titten',
	aliases: ['eumel', 'boobs', 'moepse', 'boob', 'euter', 'bazonkers'],
	description: 'XXX',
	filename: 'boob',
	nsfw: true,
	async execute(message, args) {
		randomimgcommand.execute(message, args, 'boob', '🌰', true);
	},
};