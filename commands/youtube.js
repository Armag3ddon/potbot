module.exports = {
	name: 'youtube',
	description: 'Bettet das erste gefundene Youtube-Video ein.',
	args: true,
	usage: '<Begriffe für Youtube-Suche>',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};