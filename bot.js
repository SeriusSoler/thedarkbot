const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("Estoy listo!");
});

var prefix = config.prefix;
client.on("message", (message) => {
if (message.content === 'ping') {
   message.reply('pong');
  }
});

client.login(progress.env.BOT.TOKEN);
