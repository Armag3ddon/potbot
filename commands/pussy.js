const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'pussy',
	aliases: ['muschi', 'vagina', 'vulva', 'möse', 'schnecke', 'fotze'],
	description: 'XXX',
	filename: 'pussy',
	nsfw: true,
	execute(message, args) {
		randomimgcommand.execute(message, args, 'pussy', '💦', true);
	},
};