/* Lookup a youtube video, display the first result */

const search = require('youtube-search');
const dotenv = require('dotenv');

module.exports = {
	name: 'youtube',
	aliases: ['yt', 'video'],
	description: 'Bettet das erste gefundene Youtube-Video ein.',
	args: true,
	usage: '<Begriffe für Youtube-Suche>',
	execute(message, args) {
		let searchstring = '';
		for (var i = 0; i < args.length; i++) {
			searchstring += ' ' + args[i];
		}

		const opts = {
			q: searchstring,
			maxResults: 1,
			key: process.env.GOOGLE_API_KEY,
			type: 'video',
		};

		search('jsconf', opts, function(err, results) {
			if (err) {
				console.log(err);
				return message.channel.send('Fehler bei der Youtube-Suche');
			}
			message.channel.send(results[0].link);
		});
	},
};