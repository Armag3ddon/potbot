const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'tanzen',
	aliases: ['tanz', 'dance', 'swing'],
	description: 'Richtig abtanzen!',
	filename: 'dance',
	execute(message, args) {
		randomimgcommand.execute(message, args, 'dance', false, false);
	},
};