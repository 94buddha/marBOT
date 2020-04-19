const { client } = require('../mar');
const jawab = require('./jawab');
const kasar = require('./kasar');
module.exports= message => {
 message.content = message.content.toLowerCase(message.content)
 var jbss = "\n```css\nTolong jangan buang sampah sembarangan ya 👍😴\n```";
 if (message.content.includes(kasar(message))) { kasar(message)
 };
 if (message.content.includes("bot")) {
   a = Math.floor(Math.random() * 40) + 1;  // returns a random integer from 1 to 40
   b++;
   if (b == 1) {
     message.channel.send(`Hehe iyaa.. hai kakak ${message.author},\nNamaku Mar!
       Aku mar-<@&694901218304196639> <#${message.channel.id}> **fiagra** yaaa.${jbss}`);
     }
     else if ( b !== 41 ) { jawab(message)
     }
     else (b = 0);
     console.log(`a = ${a}\nb = ${b}\n######`);
   }
 }
