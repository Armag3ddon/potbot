const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const dotenv = require('dotenv');
dotenv.config();

const { prefix } = require('./config.json');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Startup
client.once('ready', () => {
	console.log('Ready!');
});

// Message receiving
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

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
});

// Discord login
client.login(process.env.TOKEN);