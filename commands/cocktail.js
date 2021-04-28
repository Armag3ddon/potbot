module.exports = {
	name: 'cocktail',
	aliases: ['drink', 'longdrink', 'mischgetränk'],
	description: 'Alkohol mit Partyflair.',
	usage: '<Sorte>',
	filename: 'cocktail',
	execute(message, args) {
		const cocktails = ['Alexander', 'Americano', 'Angel Face', 'Aviation', 'Between the Sheets', 'Boulevardier', 'Brandy Crusta', 'Casino', 'Clover Club', 'Daiquiri', 'Dry martini', 'Gin fizz', 'Hanky Panky', 'John Collins', 'Last Word', 'Manhattan', 'Martinez', 'Mary Pickford', 'Monkey Gland', 'Negroni', 'Old fashioned', 'Paradise', 'Planter\'s Punch', 'Porto flip', 'Ramos fizz', 'Rusty Nail', 'Sazerac', 'Sidecar', 'Stinger', 'Tuxedo', 'Vieux Carré', 'Whiskey sour', 'White Lady', 'Bellini', 'Black Russian', 'Bloody Mary', 'Caipirinha', 'Champagne cocktail', 'Corpse Reviver #2', 'Cosmopolitan', 'Cuba libre', 'French 75', 'French Connection', 'Golden dream', 'Grasshopper', 'Hemingway Special', 'Horse\'s Neck', 'Irish coffee', 'Kir', 'Long Island iced tea', 'Mai Tai', 'Margarita', 'Mimosa', 'Mint julep', 'Mojito', 'Moscow mule', 'Piña Colada', 'Pisco Sour', 'Sea Breeze', 'Sex on the Beach', 'Singapore Sling', 'Tequila Sunrise', 'Vesper', 'Zombie', 'Barracuda', 'Bee\'s Knees', 'Bramble', 'Canchanchara', 'Dark \'n\' Stormy', 'Espresso martini', 'Fernandito', 'French martini', 'Illegal', 'Lemon drop martini', 'Naked and Famous', 'New York Sour', 'Old Cuban', 'Paloma', 'Paper Plane', 'Penicillin', 'Russian Spring Punch', 'Southside', 'Spicy Fifty', 'Spritz', 'Suffering Bastard', 'Tipperary', 'Tommy\'s margarita', 'Trinidad Sour', 'Ve.n.to', 'Yellow Bird'];
		let selection;
		if (args.length > 0) {
			selection = args.join(' ');
		}
		else {
			selection = cocktails[Math.floor(Math.random() * cocktails.length)];
		}
		message.channel.send(':cocktail:');
		message.channel.send('Ich trinke jetzt einen ' + selection + '.');
	},
};