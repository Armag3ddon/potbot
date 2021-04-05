module.exports = {
	name: 'tee',
	aliases: ['tea', 'heißgetränkfürkenner'],
	description: 'Ein Tässchen gefällig?',
	filename: 'tea',
	execute(message) {
		const tea = ['Darjeeling', 'Assam', 'Ceylon', 'Ostfriesentee mit ordentlich Kluntje', 'Sencha', 'Oolong', 'Pu-Erh', 'Yin Zhen Bai Hao', 'Pai Mu Tan', 'Lapsang Souchong', 'Genmaicha'];
		message.channel.send(':tea:');
		message.channel.send('Ich trinke jetzt einen ' + tea[Math.floor(Math.random() * tea.length)] + '.');
	},
};