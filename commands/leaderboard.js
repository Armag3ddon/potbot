const { Users } = require('../dbObjects.js');

module.exports = {
	name: 'bestenliste',
	aliases: ['leaderboard'],
	description: '(CHGW) Die 5 Punktebesten anzeigen!',
	filename: 'leaderboard',
	async execute(message) {
		if (!message.guild) return;
		if (message.guild != process.env.CHGW_ID) return message.reply('Ist nur auf dem CHGW-Server erlaubt!');

		const user_list = await Users.getBest(5);
		if (user_list.length == 0) {
			message.channel.send('Die Bestenliste enthält keine Besten bisher!');
		}
		const data = [];
		data.push('Bestenliste:');
		let count = 1;
		for (let i = 0; i < user_list.length; i++) {
			if (user_list[i].user_id === null) continue;

			try {
				const user = await message.client.users.fetch(user_list[i].user_id, true);
				data.push(count + '. ' + user.toString() + ': ' + user_list[i].balance);
				count++;
			}
			catch(error) {
				console.log(error);
			}
		}
		message.channel.send(data);
	},
};