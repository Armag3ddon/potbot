const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'butt',
	aliases: ['butthole', 'loch', 'poloch', 'arschloch', 'asshole'],
	description: 'XXX',
	filename: 'butt',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.BUTT.split(',');
		postrandom.postrandom(message, vids, '🍑');
	},
};