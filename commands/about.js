module.exports = {
	name: 'über',
	aliases: ['about', 'was'],
	description: 'Infos über diesen Bot.',
	filename: 'about',
	execute(message, args) {
		const data = [];

		data.push('Hallo, ich bin der Potbot!');
		data.push('\nIch wurde von Armag3ddon hergestellt. Fragen also dahin!');
		data.push('\nWenn du wissen willst, wie ich funktioniere, dann geht das hier: https://github.com/Armag3ddon/potbot');

		message.channel.send(data, { split: true });
	},
};