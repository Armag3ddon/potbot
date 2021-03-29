const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'dick',
	aliases: ['penis', 'schlong', 'cock'],
	description: 'XXX',
	filename: 'dick',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.DICK.split(',');
		postrandom.postrandom(message, vids, '🍆');
	},
};