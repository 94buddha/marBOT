exports.run = (client, message, args) => {
  if(!args || args.length < 3) return message.channel.send(".____.");
  let [age, sex, location] = args;
  if (age.length < 2 || sex.length > 1) return message.channel.send('perhatiin kek urutannyaa');
  message.reply(`Hai kakak ${sex} yang dari ${location},\
    \nciee ngga keliatan ${age} ih umurnyaaaa... netflix n chill yuuuk?`);
}
