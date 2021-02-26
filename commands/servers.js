module.exports = {
	name: 'servers',
	description: '',
	hidden: true,
	filename: 'servers',
	execute(message) {
		if (message.author.id != process.env.OWNER_ID) return;

		const guilds = [];
		guilds.push('Server:');
		guilds.push(message.client.guilds.cache.map(guild => guild.name).join(', '));

		message.channel.send(guilds);
	},
};