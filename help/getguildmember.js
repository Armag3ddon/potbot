/* Get the id of another guild member or post some error message */

module.exports = {
	async execute(message, args, command) {
		let user;
		let self = false;
		const guild = await message.client.guilds.fetch(process.env.POT_ID);
		if (args.length) {
			if (!message.mentions.users.size > 0) {
				message.channel.send('Benutzer nicht gefunden. Verwendung: !' + command + ' @Benutzer');
				return false;
			}
			user = message.mentions.users.first().id;
			if (!guild.member(user)) {
				message.channel.send('Benutzer nicht gefunden. Verwendung: !' + command + ' @Benutzer');
				return false;
			}
		}
		else {
			user = message.author.id;
			self = true;
		}

		const userhandle = await message.client.users.fetch(user);
		return { user: userhandle, self: self };
	},
};