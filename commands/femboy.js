const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'femboy',
	aliases: ['eboy'],
	description: 'XXX',
	filename: 'femboy',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'femboy', '👗', true);
	},
};