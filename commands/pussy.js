const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'pussy',
	aliases: ['muschi', 'vagina', 'vulva', 'möse', 'schnecke', 'fotze'],
	description: 'XXX',
	filename: 'pussy',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.PUSS.split(',');
		postrandom.postrandom(message, vids, '💦');
	},
};