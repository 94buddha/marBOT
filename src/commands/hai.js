exports.run = (client, message) => {
message.channel.send({embed: {
    color: 993939,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "marBOT",
    url: "http://github.com/nugroho-arie/marBOT",
    description: "Hai kak, kenalin aku Mar. ",
    fields: [{
        name: "versi 2.0.0",
        value: "Aku adalah marBOT yang bertugas jagain sekre fiagra."
      },
      {
        name: "FGR-Test-Bot-01",
        value: "Kalau mau bantu - bantu, coba dari sini juga boleh kak [FGR-TestBOT-01](https://github.com/nugroho-arie/FGR-TestBOT-01)."
      },
      {
        name: "Pesan dari Fullhouse",
        value: "\n```css\nTolong jangan buang sampah sembarangan ya 👍😴\n```"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Klub Fiagra"
    }
  }
});
}
