const Discord = require('discord.js');
const client = new Discord.Client();
let a = 0;

client.once('ready', () => {
	console.log('Ready!');
});
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

//message listener
client.on('message', message => {
    if (message.content.includes("bot")) {
        //a++;
			if (message.content.includes("asu")) {
				message.channel.send('gabole kasar ya!');
			} else {
		a = Math.floor(Math.random() * 25) + 1;  // returns a random integer from 1 to 25
			console.log(a);
			switch (a) {
			  case 1:
				message.channel.send('Hehe iyaa.. hai kakak namaku Mar! aku marBOT sekre fiagra yaaa. tolong jangan buang sampah sembarangan ya :((');
				break;
			  case 2:
				message.channel.send('loh iya?');
				break;
			  case 3:
				message.channel.send('kok ngeyeeel');
				break;
			  case 5:
				message.channel.send('paan dah');
				break;
			  case 6:
				message.channel.send('??????');
				break;
			  case 8:
				message.channel.send('Iya iya kak, udah kenal sama Mar kan?');
				break;
			  case 10:
				message.channel.send('y');
				break;
			  case 11:
				message.channel.send('._.');
				break;
			  case 12:
				message.channel.send('iya kak, iyaa');
				break;
			  case 15:
				message.channel.send('emangnya aku bolot kaya icangg??');
				break;
			  case 16:
				message.channel.send('sekali lagi dapet..........');
				break;
			  case 20:
				message.channel.send('hufttttt');
				break;
			  case 25:
				a = 0;
				break;
				}
			}
    }
});

client.on('message', message => {
	if (message.content.includes("di sekre?")) {
		// First we use guild.members.fetch to make sure all members are cached
message.guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// We now have a collection with all online member objects in the totalOnline variable
	message.channel.send(`Gatau deh, tapi lagi ada ${totalOnline.size} yang lagi di #sekre nih kak!`);
		});
	}
});
