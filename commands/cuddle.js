const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'cuddle',
	aliases: ['kuscheln'],
	description: 'XXX',
	filename: 'cuddle',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'cuddle', '💕', true);
	},
};