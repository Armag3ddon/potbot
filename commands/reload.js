/* Reload a command */

module.exports = {
	name: 'reload',
	description: '',
	hidden: true,
	filename: 'reload',
	execute(message, args) {
		if (message.author.id != process.env.OWNER_ID) return;
		if (!args.length) return message.channel.send('Befehl zum Nachladen fehlt.');

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return message.channel.send('Befehl nicht gefunden.');

		delete require.cache[require.resolve(`./${command.filename}.js`)];
		try {
			const newCommand = require(`./${command.filename}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Befehl \`${command.name}\` wurde nachgeladen.`);
		} catch (error) {
			console.error(error);
			message.channel.send('Fehler beim Nachladen.');
		}
	},
};