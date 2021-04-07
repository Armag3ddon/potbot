module.exports = {
	name: 'hulk',
	aliases: ['thegif'],
	description: 'THE GIF',
	filename: 'hulk',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		message.channel.send(process.env.HULK).then(msg => msg.react('💚'));
	},
};