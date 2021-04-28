module.exports = {
	name: 'tee',
	aliases: ['tea', 'heißgetränkfürkenner'],
	description: 'Ein Tässchen gefällig?',
	usage: '<Sorte>',
	filename: 'tea',
	execute(message, args) {
		const tea = ['Darjeeling', 'Assam', 'Ceylon', 'Ostfriesentee mit ordentlich Kluntje', 'Sencha', 'Oolong', 'Pu-Erh', 'Yin Zhen Bai Hao', 'Pai Mu Tan', 'Lapsang Souchong', 'Genmaicha', 'Earl Grey', 'English 5 o\'clock', 'English Breakfast'];
		let selection;
		if (args.length > 0) {
			selection = args.join(' ');
		}
		else {
			selection = tea[Math.floor(Math.random() * tea.length)];
		}
		message.channel.send(':tea:');
		message.channel.send('Ich trinke jetzt einen ' + selection + '.');
	},
};