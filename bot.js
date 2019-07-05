const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('$') 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});









client.on('message', message => {

  if(message.content === prefix + "user"){

    var embed = new Discord.RichEmbed()

    .setTitle(message.author.tag, message.author.avatarURL)

    .addField(`User`, message.author.username)

    .addField(`Discrim`,`#`+ message.author.discriminator)

    .addField(`Name Color Role`, message.member.colorRole)

    .addField(`Game`,message.author.presence.game ||"Idle.")

    .addField(`Status`,message.author.presence.status)

    message.channel.send(embed);

  }

});










client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
