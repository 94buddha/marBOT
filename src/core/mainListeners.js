const botReply = require('./botReply');
var a = b = 0;
module.exports = client => {
	client.on('message', message => { botReply(message)
	});
 }
