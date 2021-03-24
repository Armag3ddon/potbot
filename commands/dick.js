module.exports = {
	name: 'dick',
	aliases: ['penis', 'schlong', 'cock'],
	description: 'XXX',
	filename: 'dick',
	nsfw: true,
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = process.env.DICK.split(',');
		const rnd_vid = vids[Math.floor(Math.random() * vids.length)];

		message.channel.send(rnd_vid).then(msg => msg.react('🍆'));
	},
};