const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'lewd',
	aliases: ['sperm', 'cum', 'orgasm'],
	description: 'XXX',
	filename: 'lewd',
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const pics = ['https://i.imgur.com/tsiOJbV.jpg', 'https://i.imgur.com/dRDXbC1.jpg', 'https://i.imgur.com/1HmwJyF.jpg', 'https://i.imgur.com/Auf1WbG.jpg'];
		const rnd_pic = pics[Math.floor(Math.random() * pics.length)];

		const attachment = new MessageAttachment(rnd_pic);

		message.channel.send(attachment).then(msg => msg.react('💦'));
	},
};