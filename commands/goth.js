const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'goth',
	aliases: ['bigtiddygothgf'],
	description: 'XXX',
	filename: 'goth',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.GOTH.split(',');
		postrandom.postrandom(message, vids, '🖤');
	},
};