const { prefix } = require('../config.json');

module.exports = {
	name: 'hilfe',
	aliases: ['commands', 'help', 'befehle', 'bot'],
	description: 'Alle Befehle oder Hilfe für einen einzelnen Befehl anzeigen.',
	usage: '<Befehl>',
	filename: 'help',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		data.push('Diese Befehle kenne ich:');
		data.push(commands.map(function(currentValue) {
			if (currentValue.hidden) return;
			return currentValue.name;
		}).filter(function(element) {
			return element !== undefined;
		}).join(', '));
		data.push(`\nDu kannst '${prefix}hilfe <Befehl>' benutzen, um mehr zu einem bestimmten Befehl zu erfahren.`);

		if (!args.length) {
			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Du hast eine PM!');
				})
				.catch(error => {
					console.error(`PM an ${message.author.tag} konnte ich nicht senden.\n`, error);
					message.reply(`Hast du PMs ausgeschaltet? Wenn du die Befehle hier spammen willst, kannst du das so machen: '${prefix}hilfe spam'.`);
				});
		}
		if (args[0] === 'spam') {
			return message.channel.send(data, { split: true });
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command || command.hidden) {
			return message.reply('Diesen Befehl kenne ich nicht. Keine Hilfe für dich!');
		}

		data.push(`**Befehl:** ${command.name}`);

		if (command.aliases) data.push(`**Aliase:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Beschreibung:** ${command.description}`);
		if (command.usage) data.push(`**Verwendung:** ${prefix}${command.name} ${command.usage}`);

		message.channel.send(data, { split: true });
	},
};