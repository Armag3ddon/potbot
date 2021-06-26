const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'bussy',
	aliases: ['boypussy', 'boyfotze'],
	description: 'XXX',
	filename: 'bussy',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'bussy', '🍩', true);
	},
};