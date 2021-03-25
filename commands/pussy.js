module.exports = {
	name: 'pussy',
	aliases: ['muschi', 'vagina', 'vulva', 'möse', 'schnecke', 'fotze'],
	description: 'XXX',
	filename: 'pussy',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.PUSS.split(',');
		const rnd_vid = vids[Math.floor(Math.random() * vids.length)];

		message.channel.send(rnd_vid).then(msg => msg.react('💦'));
	},
};