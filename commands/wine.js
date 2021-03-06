module.exports = {
	name: 'wein',
	aliases: ['wine', 'rebensaft', 'tröpfchen'],
	description: 'Gehoben trinken.',
	usage: '<Sorte>',
	filename: 'wine',
	execute(message, args) {
		const wines = ['Chardonnay', 'Gewürztraminer', 'Müller-Thurgau', 'Muskateller', 'Riesling', 'Sauvignon Blanc', 'Cabernet Sauvignon', 'Grenache', 'Merlot', 'Nebbiolo', 'Pinot Noir', 'Sangiovese', 'Syrah', 'Tempranillo', 'Zinfandel', 'Rotwein', 'Weißwein', 'Rosé'];
		let selection;
		if (args.length > 0) {
			selection = args.join(' ');
		}
		else {
			selection = wines[Math.floor(Math.random() * wines.length)];
		}
		message.channel.send(':wine_glass:');
		message.channel.send('Ich trinke jetzt einen ' + selection + '.');
	},
};