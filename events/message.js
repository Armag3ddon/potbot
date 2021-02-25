const { prefix } = require('../config.json');
const threadname = require('../help/threadname.js');

module.exports = {
	name: 'message',
	execute(message) {
		if (message.author.bot) return;
		if (message.mentions.users &&
			message.mentions.users.size > 0) {
			let mention = false;
			for (const id of message.mentions.users.keys()) {
				if (id === message.client.user.id) {
					mention = true;
				}
			}
			if (mention) {
				return message.channel.send('Ich bin ein Bot. !hilfe für mehr.');
			}
		}
		if (!message.content.startsWith(prefix)) {
			if (message.content.includes('forum.mods.de/bb/thread.php') ||
				message.content.includes('forum.mods.de/thread.php')) {
				threadname.execute(message);
			}
			return;
		}

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
		}
		catch (error) {
			console.error(error);
			message.reply('Ich habe einen Randbauer gebaut.');
		}
	},
};