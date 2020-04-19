const kasar = {
  "asu" : "gabole kasar ya! 🤬🤬🤬",
  "jembut" : "O___O",
  "anjing" : "kucing",
  "cok" : "yg ketua fiagra bkn sih?",
  "kucing" : "anjing",
  "lho" : "hee?",
  "mbun" : `<@490106476439011338>`,
  "meong" : "**purrrrrr**",
  "dim" : `<@421941618669649940>`,
  "dick": `<@603827599357247509>`,
  "cang": `<@573140862125604864>`,
  "cup": `<@426825472329121792>`,
  "rie": `<@448626469716099073>`,
  "gus": `<@395253803563089922>`,
  "ji": `<@388248573734551562>`,
  "jamal": `<@350679429841682435>`,
  "tyo": `<@403235275553243139>`,
  "kar": `<@572325618272698372>`,
  "naf": `<@695218418734989383>`,
  "yud": `<@694930513756028980>`,
  "sen": `<@695275105311260763>`,
  "wil": `<@143013598422237184>`,
  "lip": `<@457430508490588203>`,
  "jar": `<@695007217996529665>`,
  "coki": `<@324701134214135811>`,
  "vanda": `<@694928275482476565>`,
  "van": `<@203997697227620353>`,
  "rik": `<@688683822337753098>`,
  "wilo": `<@694929724589211768>`,
  "daniel": `<@588952635198013460>`,
  "riq": `<@332182517069119491>`,
  "goblok": "bu.. bu. buah apa warnanya",
  "bgst": "dangdut is the music of my country",
  "gblk": "nanggung",
  "cupu": "ucup",
  "42": "arti kehidupan adalah",
  "bau": "kaya orang india",
  "dota": "adalah dolanan tai",
  "tai": "bagian dari permainan menyenangkan ya kak",
  "mar": "y ganteng"
  "yaudah": "y"
  "gamau": "ih"

  }
module.exports = message => {
  const kasark = message.content.toLowerCase();
  if(kasar[kasark]) {
    message.channel.send(kasar[kasark] + ` ${message.author}`);
  }
}
