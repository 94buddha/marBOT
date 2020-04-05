exports.run = (client, message, [channel, ...id]) => {
  const totalOnline = require('../events/guildMemberOnline');
  message.channel.send(`Gatau deh kak ${message.author}, tapi lagi ada ${totalOnline.size} yang lagi di <#${message.channel.id}> nih kak!`);
  }
