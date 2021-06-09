const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'primessexroboter',
	aliases: ['robot'],
	description: 'XXX',
	filename: 'robot',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'robot', '🕹', true);
	},
};