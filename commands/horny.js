const getguildmember = require('../help/getguildmember.js');
const randomimgcommand = require('../help/randomimgcommand.js');

module.exports = {
	name: 'horny',
	aliases: ['hornyjail', 'gotohornyjail', 'bonk'],
	description: 'Sende eine Person deiner Wahl ins Horny Jail!\nVerwendung: !horny @Benutzer',
	filename: 'horny',
	async execute(message, args) {
		if (!message.guild) return;
		if (message.guild != process.env.POT_ID) return message.reply('Ist nur auf dem mods.de-Server erlaubt!');

		const member = await getguildmember.execute(message, args, 'horny');
		if (!member) return;

		if (message.channel.id == process.env.HORNYJAIL_ID) {
			if (member.self) {
				message.channel.send(member.user.toString() + ': du bist im Horny Jail angekommen! Juchhu!');
			}
			else {
				message.channel.send(member.user.toString() + ' wird dringend gebeten, ins Horny Jail zu schauen.');
			}
			randomimgcommand.execute(message, args, 'bonk_nsfw', false, false);
		}
		else {
			const channel = message.channel.guild.channels.cache.find(chn => chn.id = process.env.HORNYJAIL_ID);
			if (member.self) {
				message.channel.send(member.user.toString() + ' möchte gerne ~~ins Horny Jail~~, in ' + channel.toString());
			}
			else {
				message.channel.send(message.author.toString() + ' schickt ' + member.user.toString() + ' ~~ins Horny Jail~~, in ' + channel.toString());
			}
			randomimgcommand.execute(message, args, 'bonk_sfw', false, false);
		}
	},
};