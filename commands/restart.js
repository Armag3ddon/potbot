/* Reload a command */

module.exports = {
	name: 'restart',
	description: '',
	hidden: true,
	filename: 'restart',
	execute(message) {
		if (message.author.id != process.env.OWNER_ID) return;

		process.exit();
	},
};