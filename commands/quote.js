/* Embed a single forum post into Discord */

const Discord = require('discord.js');
const xml2js = require('xml2js');
const forum = require('../help/forum.js');
const bbcode = require('../help/bbcode.js');

module.exports = {
	name: 'quote',
	aliases: ['zitat', 'q'],
	description: 'Bettet einen bestimmten Post in Discord ein.',
	args: true,
	usage: '<Post-URL>',
	async execute(message, args) {
		try {
			const url = new URL(args[0]);

			if (url.hostname != 'forum.mods.de') {
				return message.reply('Das scheint keine URL zum Forum zu sein.');
			}
			if (!url.searchParams.get('TID')) {
				return message.reply('Keine Thread-ID gefunden.');
			}
			if (!url.searchParams.get('PID')) {
				return message.reply('Keine Post-ID gefunden.');
			}
			const tid = url.searchParams.get('TID');
			const pid = url.searchParams.get('PID');
			try {
				const response = await forum.getThread(tid, pid);
				const parser = new xml2js.Parser();
				parser.parseString(response, function(err, data) {
					if (err) {
						console.log(err);
						throw 'Es gab ein Problem beim Verstehen des Forums.';
					}
					// Go through the weird json we got
					const posts = data.thread.posts[0].post;
					let post = -1;
					for (let i = 0; i < posts.length; i++) {
						if (parseInt(posts[i]['$'].id) === parseInt(pid)) {
							post = i;
						}
					}
					if (post == -1) {
						throw 'Post ID konnte nicht gefunden werden.';
					}

					const embed = new Discord.MessageEmbed();
					embed.setColor('#394E63');
					const user = posts[post]['user'][0]['_'];
					const userid = posts[post]['user'][0]['$']['id'];
					const avatar = posts[post]['avatar'][0]['_'];
					let content = posts[post]['message'][0]['content'][0];
					const time = posts[post]['date'][0]['_'];
					const editcount = posts[post]['message'][0]['edited'][0]['$']['count'];
					const threadtitle = data.thread['title'][0];
					const posttitle = posts[post]['message'][0]['title'][0];

					if (avatar != '') {
						embed.setAuthor(user,
							'https://forum.mods.de' + avatar,
							'https://my.mods.de/' + userid);
					}
					else {
						embed.setAuthor(user,
							'',
							'https://my.mods.de/' + userid);
					}

					// Trim title to the allowed maximum of 256 characters
					embed.setTitle('Thread: ' + threadtitle.substr(0, 256));

					content = bbcode.process({ text: content }).html;

					if (posttitle != '') {
						content = '**' + posttitle + '**\n\n' + content;
					}

					if (content.length > 2048) {
						content = '**Dieser Post überschreitet die von Discord erlaubte Zeichenmenge von 2048!**';
					}

					embed.setDescription(content);

					if (parseInt(editcount) > 0) {
						embed.setFooter(time + ', ' + parseInt(editcount) + ' mal editiert, zuletzt: ' +
						posts[post]['message'][0]['edited'][0]['lastedit'][0]['date'][0]['_'] +
						' von ' + posts[post]['message'][0]['edited'][0]['lastedit'][0]['user'][0]['_']);
					}
					else {
						embed.setFooter(time);
					}

					message.channel.send(embed);
				});
			}
			catch (error) {
				message.reply('' + error);
			}
		}
		catch (error) {
			message.reply('Das scheint keine gültige URL zu sein.');
		}
	},
};