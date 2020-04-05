exports.run = (client, message, args) => {
  if(!args || args.length < 1) return message.reply("^0^");
  const commandName = args[0];
  if(!client.commands.has(commandName)) {
    return message.reply("mana ada **begituan** kakak");
  }
  delete require.cache[require.resolve(`./${commandName}.js`)];
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`perintah ${commandName} udah di__semprot__ yach!`);
};
