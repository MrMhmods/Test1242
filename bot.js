const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('$') 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
