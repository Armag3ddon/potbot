/* Get all unposted images for a specific command from the db */

const { Images } = require('../dbObjects.js');

module.exports = {
	async execute(command) {
		let imgs = await Images.getUnpostedForCommand(command);
		if (imgs.length > 0) return imgs;
		// All images have been posted, reset db
		await Images.resetForCommand(command);
		imgs = await Images.getUnpostedForCommand(command);
		return imgs;
	},
};