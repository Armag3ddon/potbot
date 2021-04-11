const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'bierjunge',
	aliases: ['bierduell', 'hängt', 'bierskandal', 'biermensur', 'trinkmensur', 'jünger'],
	description: 'Eine ehrenhafte Herausforderung aussprechen.\n!bierjunge @Benutzer',
	filename: 'bierjunge',
	async execute(message, args) {
		if (!message.guild) return;

		let user;
		let self = false;
		const guild = await message.client.guilds.fetch(process.env.POT_ID);
		if (args.length) {
			if (!message.mentions.users.size > 0) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !bierjunge @Benutzer');
			}
			user = message.mentions.users.first().id;
			if (!guild.member(user)) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !bierjunge @Benutzer');
			}
		}
		else {
			user = message.author.id;
			self = true;
		}

		message.client.users.fetch(user).then(function(userhandle) {
			const attachment = new MessageAttachment('https://i.imgur.com/ttEFqYC.png');
			let txt;
			if (self) {
				txt = userhandle.toString() + ' möchte dringend und schnell ein Bier verzehren!';
			}
			else {
				txt = message.author.toString() + ' fordert ' + userhandle.toString() + ' heraus, dringend und schnell ein Bier zu verzehren!';
			}
			message.channel.send(txt, attachment);
		});
	},
};