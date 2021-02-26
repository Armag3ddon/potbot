module.exports = {
	name: 'search',
	aliases: ['suche'],
	description: 'Erinnert dich an die Links zu den pOT-Suchen.',
	usage: '<Suchbegriffe>',
	filename: 'search',
	execute(message, args) {
		if (!args.length) {
			message.channel.send('Ich kenne zwei hilfreiche pOT-Suchen:' +
				'\ncsde_rats: https://potstats2.enkore.de/search/' +
				'\nOli: http://bbdb.jomx.net');
		}
		else {
			const oli_query = args.join('+');
			const csde_query = args.join('%20');

			message.channel.send('Such dir eine Suche aus:' +
				'\ncsde_rats: https://potstats2.enkore.de/search/#%7B%22query%22:%22' + csde_query + '%22,%22type%22:%22post%22,%22sort%22:%22date-desc%22%7D' +
				'\nOli: http://bbdb.jomx.net/?topic=&author=&boards=&date_range=&query=' + oli_query + '&sortby=-time');
		}
	},
};