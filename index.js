const Discord = require('discord.js');
const client = new Discord.Client();
let a = 0;

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
/* Emitted when the client becomes ready to start working.    */

client.once('ready', () => {
  console.log(`Tunggu sebentar ya kak lagi siap - siap. . .`);
	console.log('Udah siap! Kenalin aku,');
	console.log(client.user.tag);
	console.log(`Bareng sama ${client.users.cache.size} orang yang online;`);
	console.log(`Kalo nggak salah ada di ${client.channels.cache.size} channel;`);
	console.log(`Di ${client.guilds.cache.size} server.`);
	client.user.setActivity("Kumpulan Film JADUL terbaik");
});
//message listener
client.on('message', message => {
  if (message.content.includes("asu")) {
    message.channel.send(`gabole kasar ya ${message.author}! 🤬🤬🤬`)
  } else if (message.content.includes("bot")) {
		a = Math.floor(Math.random() * 18) + 1;  // returns a random integer from 1 to 18
    b++;
			console.log(`a = ${a}`);
      console.log(`b = ${b}`);
      console.log("######");
      if (b == 1) {
        var jbss = "\n```css\nTolong jangan buang sampah sembarangan ya 👍😴\n```";
        message.channel.send(`Hehe iyaa.. hai kakak ${message.author},\nNamaku ${client.user}!
Aku __mar__-<@&694901218304196639> <#${message.channel.id}> __**fiagra**__ yaaa.${jbss}`);
        return;
      } else if (1 < b < 20 ) {
        switch (a) {
  			  case 1:
  				message.channel.send('loh iya?');
  				break;
  			  case 2:
  				message.channel.send('kok ngeyeeel');
  				break;
  			  case 3:
  				message.channel.send('paan dah');
  				break;
  			  case 4:
  				message.channel.send('??????');
  				break;
  			  case 5:
  				message.channel.send(`Iya iya kak, udah kenal sama ${client.user} kan?`);
  				break;
  			  case 6:
  				message.channel.send('y');
  				break;
  			  case 7:
  				message.channel.send('._.');
  				break;
  			  case 8:
  				message.channel.send('iya kak, iyaa');
  				break;
  			  case 9:
  				message.channel.send('emangnya aku bolot kaya icangg??');
  				break;
  			  case 10:
  				message.channel.send('sekali lagi dapet..........');
  				break;
  				case 11:
  				message.channel.send('ketuanya fiagra mana sih??');
  				break;
  			  case 12:
  				message.channel.send('hufttttt');
  				break;
  				case 13:
  				message.channel.send('hoaammmm😴😴😴');
  				break;
  				case 14:
  				message.channel.send('KATANYA ANAK FILM NONTON GIHHHHHHHHH');
  				break;
  				}
      } else {
        (b == 20);
        (b = 0);
      }
		}
});

client.on('message', message => {
	if (message.content.includes("sini?")) {
		// First we use guild.members.fetch to make sure all members are cached
message.guild.members.fetch().then(fetchedMembers => {
	const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
	// We now have a collection with all online member objects in the totalOnline variable
	message.channel.send(`Gatau deh kak ${message.author}, tapi lagi ada ${totalOnline.size} yang lagi di <#${message.channel.id}> nih kak!`);
		});
	}
});
