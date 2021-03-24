module.exports = {
	name: 'butt',
	aliases: ['butthole', 'loch', 'poloch', 'arschloch'],
	description: 'XXX',
	filename: 'butt',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.BUTT.split(',');
		const rnd_vid = vids[Math.floor(Math.random() * vids.length)];

		message.channel.send(rnd_vid).then(msg => msg.react('🍑'));
	},
};