module.exports = client => {
  var botMar = client.user;
  console.log(client.user.tag);
  console.log(`Bareng sama ${client.users.cache.size} orang yang online;`);
  console.log(`Kalo nggak salah ada di ${client.channels.cache.size} channel;`);
  console.log(`Di ${client.guilds.cache.size} server.`);
  botMar.setActivity('anak SATUB', { type: 'LISTENING' });
};
