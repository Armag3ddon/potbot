module.exports = {
	name: 'kaffee',
	aliases: ['coffee', 'schwarzesgold'],
	description: 'Ein Tässchen gefällig?',
	filename: 'coffee',
	execute(message) {
		const coffee = ['Americano', 'Filterkaffee', 'Espresso', 'Cappucino', 'Latte Macchiato', 'Mokka', 'Cortado', 'Espresso Macchiato', 'Flat White', 'Caffè Latte'];
		message.channel.send(':coffee:');
		message.channel.send('Ich trinke jetzt einen ' + coffee[Math.floor(Math.random() * coffee.length)] + '.');
	},
};