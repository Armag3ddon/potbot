module.exports = {
	name: 'titten',
	aliases: ['eumel', 'boobs', 'moepse', 'boob', 'bazonkers'],
	description: 'XXX',
	filename: 'boob',
	execute(message) {
		if (!message.channel.nsfw) return message.react('❌');

		const vids = ['https://i.imgur.com/jCuvFKP.mp4', 'https://i.imgur.com/taPc8YZ.mp4', 'https://i.imgur.com/hDUYPTB.mp4', 'https://i.imgur.com/PYmAXo8.mp4'];
		const rnd_vid = vids[Math.floor(Math.random() * vids.length)];

		message.channel.send(rnd_vid).then(msg => msg.react('💦'));
	},
};