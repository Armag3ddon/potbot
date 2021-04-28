module.exports = {
	name: 'kaffee',
	aliases: ['coffee', 'schwarzesgold'],
	description: 'Ein Tässchen gefällig?',
	usage: '<Sorte>',
	filename: 'coffee',
	execute(message, args) {
		const coffee = ['Americano', 'Filterkaffee', 'Espresso', 'Cappucino', 'Latte Macchiato', 'Mokka', 'Cortado', 'Espresso Macchiato', 'Flat White', 'Caffè Latte'];
		let selection;
		if (args.length > 0) {
			selection = args.join(' ');
		}
		else {
			selection = coffee[Math.floor(Math.random() * coffee.length)];
		}
		message.channel.send(':coffee:');
		message.channel.send('Ich trinke jetzt einen ' + selection + '.');
	},
};