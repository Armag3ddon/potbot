const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'dick',
	aliases: ['penis', 'schlong', 'cock'],
	description: 'XXX',
	filename: 'dick',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'dick', '🍆', true);
	},
};