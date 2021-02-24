const { prefix } = require('../config.json');

module.exports = {
	name: 'message',
	execute(message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if (command.args && !args.length) {
			let reply = `Dieser Befehl verlangt nach mehr, du LoPo ${message.author}.`;

			if (command.usage) {
				reply += `\nKorrekt wäre gewesen: '${prefix}${command.name} ${command.usage}'`;
			}

			reply += '\n!hilfe für eine Übersicht aller Befehle.';

			return message.channel.send(reply);
		}

		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('Ich habe einen Randbauer gebaut.');
		}
	},
};