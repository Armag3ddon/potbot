const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'lewd',
	aliases: ['sperm', 'cum', 'orgasm'],
	description: 'XXX',
	filename: 'lewd',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const pics = process.env.LEWD.split(',');
		const rnd_pic = pics[Math.floor(Math.random() * pics.length)];

		const attachment = new MessageAttachment(rnd_pic);

		message.channel.send(attachment).then(msg => msg.react('💦'));
	},
};