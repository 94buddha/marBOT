exports.run = (client, message, args) => {
  if (!args || args.length == 0) message.channel.send("coba tulis \n```!bantuin <spasi> perintah```\natau\n```!bantuin <spasi> [nama perintah]```");
  else if (args.length > 0) { switch (args[0]) {
    case "perintah":
    message.channel.send('Jadi kak, daftar perintahnya ada ini \n```css\n!asl  !hai  !on  !ping\n``` contoh\n```!bantuin <spasi> kick <spasi> fajar```\n paham kan ya');
    break;
    case "asl":
    message.channel.send('Tau omegle nggak kak?\n nah yaudah itu diisi yg bener pake ***spasi***!!!');
    break;
    case "hai":
    message.channel.send('Hehehehe jadi mayu');
    break;
    case "on":
    message.channel.send('cobain aja kak, jangan banyak nanya');
    break;
    case "ping":
    message.channel.send('gini aja pake nanya.\ncoba aja tekan windows+r > cmd ping google.com -t');
    break;
    case "semprot":
    message.channel.send('Hah apaa??');
    break;
    case "kick":
    message.channel.send('g');
    break;
    default:
    message.channel.send("hadeh, baca pelan - pelan jangan **nyosoooooorrr** kakak");
    break;
  }
}
}
