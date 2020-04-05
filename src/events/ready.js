var pjson = require('../../package.json');
module.exports = (client) => {
  console.log(client.user.tag);
  console.log(pjson.version);
  console.log(`Bareng sama ${client.users.cache.size} orang yang online;`);
  console.log(`Kalo nggak salah ada di ${client.channels.cache.size} channel;`);
  console.log(`Di ${client.guilds.cache.size} server.`);
  client.user.setActivity('anak SATUB', { type: 'LISTENING' });
}

// if(message.author.id !== config.ownerID) return
