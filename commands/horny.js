const postrandom = require('../help/postrandom.js');

module.exports = {
	name: 'horny',
	aliases: ['hornyjail', 'gotohornyjail', 'bonk'],
	description: 'Sende eine Person deiner Wahl ins Horny Jail!\nVerwendung: !horny @Benutzer',
	filename: 'horny',
	async execute(message, args) {
		if (!message.guild) return;
		if (message.guild != process.env.POT_ID) return message.reply('Ist nur auf dem mods.de-Server erlaubt!');

		let user;
		let self = false;
		const guild = await message.client.guilds.fetch(process.env.POT_ID);
		if (args.length) {
			if (!message.mentions.users.size > 0) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !horny @Benutzer');
			}
			user = message.mentions.users.first().id;
			if (!guild.member(user)) {
				return message.channel.send('Benutzer nicht gefunden. Verwendung: !horny @Benutzer');
			}
		}
		else {
			user = message.author.id;
			self = true;
		}

		message.client.users.fetch(user).then(function(userhandle) {
			if (message.channel.id == process.env.HORNYJAIL_ID) {
				if (self) {
					message.channel.send(userhandle.toString() + ': du bist im Horny Jail angekommen! Juchhu!');
				}
				else {
					message.channel.send(userhandle.toString() + ' wird dringend gebeten, ins Horny Jail zu schauen.');
				}
				const vids = process.env.BONK_NSFW.split(',');
				postrandom.postrandom(message, vids);
			}
			else {
				const channel = message.channel.guild.channels.cache.find(chn => chn.id = process.env.HORNYJAIL_ID);
				if (self) {
					message.channel.send(userhandle.toString() + ' möchte gerne ~~ins Horny Jail~~, in ' + channel.toString());
				}
				else {
					message.channel.send(message.author.toString() + ' schickt ' + userhandle.toString() + ' ~~ins Horny Jail~~, in ' + channel.toString());
				}
				const vids = process.env.BONK_SFW.split(',');
				postrandom.postrandom(message, vids);
			}
		});
	},
};