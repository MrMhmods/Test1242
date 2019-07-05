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





client.on('message', message => {

if(message.content.startsWith(prefix + 'info')) {

var ping = `${Date.now() - message.createdTimestamp}`

let info = new Discord.RichEmbed()

.setColor('BLUE')

.setAuthor(`${client.user.tag} info`, client.user.avatarURL)

.setDescription(`**Bot ping: \`${ping}\`\n\nServers Size: \`${client.guilds.size}\`\n

Bot Prefix: \`${prefix}\`\n\nBot Owner: <@526702104849678340>**`) 

message.channel.send(info)

}

});








        



client.on('message', message => { 

    const mm = message.mentions.members.first() || message.member;

    if(message.content.startsWith(prefix + "avatar")){

        const embed = new Discord.RichEmbed()

        .setAuthor(mm.user.tag, mm.user.avatarURL)

        .setTitle("Avatar Link")

        .setURL(mm.user.avatarURL)

        .setImage(mm.user.avatarURL)

        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)

        message.channel.send(embed);

    }

});







client.on('message', message => {

  const aa = message.content.split(" ").slice(1).join(" ");

  if(message.content.startsWith(prefix + "skin")){

    if(!aa) return message.reply(`❌  -  **${prefix}skin <name>**`);

    var ss = new Discord.RichEmbed()

    .setTitle(`${aa}'s Skin!`)

    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)

    .setThumbnail(`https://minotar.net/avatar/${aa}`)

    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)

    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(ss);

  }

});














client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
