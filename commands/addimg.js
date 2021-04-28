const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'addimg',
	filename: 'addimg',
	hidden: true,
	async execute(message, args) {
		const command = args.shift();
		console.dir(args);
		randomimgcommand.execute(message, args, command, false, false);
	},
};