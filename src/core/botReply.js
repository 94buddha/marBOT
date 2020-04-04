const { client } = require('../index');
const bJawab = require('./bJawab');
module.exports= message => {
 var jbss = "\n```css\nTolong jangan buang sampah sembarangan ya 👍😴\n```";
 if (message.content.includes("asu")) {
   message.channel.send(`gabole kasar ya ${message.author}! 🤬🤬🤬`)
 };
 if (message.content.includes("bot")) {
   a = Math.floor(Math.random() * 40) + 1;  // returns a random integer from 1 to 40
   b++;
   if (b == 1) {
     message.channel.send(`Hehe iyaa.. hai kakak ${message.author},\nNamaku Mar!
       Aku mar-<@&694901218304196639> <#${message.channel.id}> **fiagra** yaaa.${jbss}`);
     }
     else if ( b !== 41 ) { bJawab(message)
     }
     else (b = 0);
     console.log(`a = ${a}\nb = ${b}\n######`);
   }
 }
