const { token } = require('./config');
const {Client}= require('discord.js');
const client = new Client();
client.login(token);

require('./core/mainListeners')(client);
//Baca README dulu ya sobat
//Update Major nih!
