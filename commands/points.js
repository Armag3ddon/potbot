const { Users } = require('../dbObjects.js');

module.exports = {
	name: 'punkte',
	aliases: ['points'],
	description: '(CHGW) Punkte erfahren oder eingeben.\nVerwendung: !punkte, !punkte @Benutzer, !punkte @Benutzer Zahl',
	filename: 'points',
	async execute(message, args) {
		if (!message.guild) return;
		if (message.guild != process.env.CHGW_ID) return message.reply('Ist nur auf dem CHGW-Server erlaubt!');

		let user;
		let pointchange = 0;
		const guild = await message.client.guilds.fetch(process.env.CHGW_ID);
		if (args.length) {
			if (!message.mentions.users.size > 0) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !punkte @Benutzer [Zahl]');
			}
			user = message.mentions.users.first().id;
			if (!guild.member(user)) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !punkte @Benutzer [Zahl]');
			}
			if (args[1]) {
				if (isNaN(parseInt(args[1]))) {
					return message.channel.send('Zweites Argument muss eine Zahl sein. Verwendung: !punkte @Benutzer Zahl');
				}
				else {
					pointchange = parseInt(args[1]);
				}
			}
		}
		else {
			user = message.author.id;
		}

		if (pointchange != 0) {
			if (!message.member.permissions.has('MANAGE_MESSAGES')) {
				return message.reply('Du Knecht hast kein Recht Punkte zu verändern.');
			}
			await Users.addPoints(user, pointchange);
		}
		const points = await Users.getPoints(user);
		let grammar = 'Punkte';
		if (points == 1) {
			grammar = 'Punkt';
		}

		message.client.users.fetch(user).then(function(userhandle) {
			message.channel.send(userhandle.toString() + ' hat ' + points + ' ' + grammar + '!');
		});
	},
};