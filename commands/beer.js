module.exports = {
	name: 'bier',
	aliases: ['beer', 'äppler', 'saufn'],
	description: 'Saufn, eh!',
	usage: '<Sorte>',
	filename: 'beer',
	execute(message, args) {
		const beers = [' Pils', ' Alt', ' Helles', ' Weizen', ' Kristallweizen', ' Radler', ' Bockbier', ' IPA', ' Pale Ale', ' Stout', ' Hefeweizen', ' Saskatoon Cheesecake Stout', ' Dubbel', ' Tripel', ' Quadrupel', ' Lager', ' Porter', ' Red Ale', ' Chocolate Stout', ' Lambic', ' West Coast IPA', 'en Maibock', ' Oude Schaarbeekse Kriek', ' Imperial Stout', 'e Berliner Weiße'];
		let selection;
		if (args.length > 0) {
			selection = ' ' + args.join(' ');
		}
		else {
			selection = beers[Math.floor(Math.random() * beers.length)];
		}
		message.channel.send(':beers:');
		message.channel.send('Ich trinke jetzt ein' + selection + '.');
	},
};