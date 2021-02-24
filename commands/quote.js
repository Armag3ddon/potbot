/* Embed a single forum post into Discord
See http://enkore.github.io/mdexml/ for the xml api documentation */

module.exports = {
	name: 'quote',
	aliases: ['zitat', 'q'],
	description: 'Bettet einen bestimmten Post in Discord ein.',
	args: true,
	usage: '<Post-URL>',
	execute(message, args) {
		return;
	},
};