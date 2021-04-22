const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'goth',
	aliases: ['bigtiddygothgf'],
	description: 'XXX',
	filename: 'goth',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'goth', '🖤', true);
	},
};