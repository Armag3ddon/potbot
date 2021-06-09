const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'furry',
	description: 'XXX',
	filename: 'furry',
	nsfw: true,
	hidden: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'furry', '😻', true);
	},
};