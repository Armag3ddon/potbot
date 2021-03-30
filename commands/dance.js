const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'tanzen',
	aliases: ['tanz', 'dance', 'swing'],
	description: 'Richtig abtanzen!',
	filename: 'dance',
	execute(message) {
		const vids = process.env.DANCE.split(',');
		postrandom.postrandom(message, vids);
	},
};