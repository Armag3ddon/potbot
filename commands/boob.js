const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'titten',
	aliases: ['eumel', 'boobs', 'moepse', 'boob', 'euter', 'bazonkers'],
	description: 'XXX',
	filename: 'boob',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.BOOB.split(',');
		postrandom.postrandom(message, vids, '🌰');
	},
};