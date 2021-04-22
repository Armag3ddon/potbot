/* Get all images for a command from the db, post one and mark it as posted */

const { Images } = require('../dbObjects.js');
const postrandom = require('./postrandom.js');
const getimages = require('./getimages.js');

module.exports = {
	async execute(message, args, command, reaction, check_nsfw) {
		if (check_nsfw) {
			if (!message.channel.nsfw) return message.react('❌');
		}

		if (args.length > 0 &&
			message.author.id == process.env.OWNER_ID) {
			if (args[0] == 'add') {
				let count = 0;
				for (let i = 1; i < args.length; i++) {
					await Images.enterNew(args[i], command);
					count++;
				}
				return message.reply('Eingetragen: ' + count);
			}
			if (args[0] == 'check') {
				const imgs = await Images.getForCommand(command);
				const data = [];
				for (let i = 0; i < imgs.length; i++) {
					data.push(imgs[i].img_url.substr(1) + ': ' + imgs[i].posted);
				}
				return message.channel.send(data);
			}
			return;
		}

		const imgItems = await getimages.execute(command);
		const imgs = [];
		for (let i = 0; i < imgItems.length; i++) {
			imgs.push(imgItems[i].img_url);
		}
		const posted = postrandom.execute(message, imgs, reaction);
		await Images.posted(posted);
	},
};