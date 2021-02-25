/* Try to get a thread name if someone links to forum.mods.de */

const xml2js = require('xml2js');
const forum = require('./forum.js');

module.exports = {
	async execute(message) {
		// Extract the url from the message
		let startpos = message.content.indexOf('forum.mods.de');
		let whitespace = startpos;
		do {
			whitespace--;
		}
		while (whitespace > 0 && message.content.charAt(whitespace) != ' ');
		if (whitespace < 0) whitespace = 0;

		startpos = whitespace;

		do {
			whitespace++;
		}
		while (whitespace < message.content.length && message.content.charAt(whitespace) != ' ');

		if (whitespace > message.content.length) whitespace = message.content.length;

		const endpos = whitespace;

		try {
			const url = new URL(message.content.substr(startpos, endpos - startpos).trim());

			if (!url.searchParams.get('TID')) return;
			const tid = url.searchParams.get('TID');
			let pid = null;
			if (url.searchParams.get('PID')) {
				pid = url.searchParams.get('PID');
			}
			try {
				if (pid != null) {
					const response = await forum.getThreadByPost(tid, pid);
					const parser = new xml2js.Parser();
					parser.parseString(response, function(err, data) {
						if (err) return;
						if (data['invalid-thread'] === '') return;

						const threadtitle = data.thread['title'][0];
						const page = data.thread.posts[0]['$']['page'];
						message.channel.send('Thread: **' + threadtitle + '** - Seite: ' + page);
					});
				}
				else {
					const response = await forum.getThreadByPost(tid, pid);
					const parser = new xml2js.Parser();
					parser.parseString(response, function(err, data) {
						if (err) return;
						if (data['invalid-thread'] === '') return;

						const threadtitle = data.thread['title'][0];
						message.channel.send('Thread: **' + threadtitle + '**');
					});
				}
			}
			catch (error) {
				return;
			}
		}
		catch (error) {
			return;
		}
	},
};