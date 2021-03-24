module.exports = {
	name: 'titten',
	aliases: ['eumel', 'boobs', 'moepse', 'boob', 'bazonkers'],
	description: 'XXX',
	filename: 'boob',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.BOOB.split(',');
		const rnd_vid = vids[Math.floor(Math.random() * vids.length)];

		message.channel.send(rnd_vid).then(msg => msg.react('💦'));
	},
};