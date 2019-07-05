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







const fs = require("fs")

const say = JSON.parse(fs.readFileSync('./say.json', 'utf8'))

client.on("message", message =>

          {

      if(!say[message.guild.id]) say[message.guild.id] = {

        say: 'say'

        }

  if(message.content.startsWith(prefix + "say" ) || message.content.startsWith(say[message.guild.id].say)) {

    var args = message.content.split(" ").slice(1).join(" ")

    message.channel.send(args)

  }});

client.on("message", message => {

if(message.content.startsWith(prefix + 'set-say')) {

  var args = message.content.split(" ").slice(1).join(" ")

    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );

    if(!say[message.guild.id]) say[message.guild.id] = {

        say: 'say'

        }

        message.channel.send(`**SET THE SAY COMMAND TO ${args}**`), say[message.guild.id].say = args

        fs.writeFile("./say.json", JSON.stringify(say), (err) => {

            if (err) console.error(err)

        })

}

})

















client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
