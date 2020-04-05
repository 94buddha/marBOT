exports.run = (client, message, [mention, ...reason]) => {
/* const modRole = message.guild.roles.find(role => role.name === "Mods");
  if (!modRole)
    return console.log("The Mods role does not exist");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You can't use this command.");
*/
  if (message.author.id !== config.ownerID) return;
  if (message.mentions.members.size === 0)
  message.delete();
    return message.channel.send("mau kick siapa sih??");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
  message.delete();
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.delete();
    message.channel.send(`${member.user.username} udah di kick yaaa.`);
  });
};
