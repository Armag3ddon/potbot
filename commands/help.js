const { prefix } = require('../config.json');

module.exports = {
	name: 'hilfe',
	aliases: ['commands', 'help', 'befehle', 'bot'],
	description: 'Alle Befehle oder Hilfe für einen einzelnen Befehl anzeigen.',
	usage: '<Befehl>',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Diese Befehle kenne ich:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nDu kannst '${prefix}hilfe <Befehl>' benutzen, um mehr zu einem bestimmten Befehl zu erfahren.`);

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
			data.push('Diese Befehle kenne ich:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nDu kannst '${prefix}hilfe <Befehl>' benutzen, um mehr zu einem bestimmten Befehl zu erfahren.`);

			return message.channel.send(data, { split: true });
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('Diesen Befehl kenne ich nicht. Keine Hilfe für dich!');
		}

		data.push(`**Befehl:** ${command.name}`);

		if (command.aliases) data.push(`**Aliase:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Beschreibung:** ${command.description}`);
		if (command.usage) data.push(`**Verwendung:** ${prefix}${command.name} ${command.usage}`);

		message.channel.send(data, { split: true });
	},
};