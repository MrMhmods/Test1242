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




client.on("guildMemberRemove", member=>{
  let roles = [];
  member.roles.forEach(r=> roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member=> {
  if(members[member.guild.id][member.id] !== undefined){
    member.addRoles(members[member.guild.id][member.id], "Returning roles after leaving");
    members[member.guild.id][member.id] = [];
  };
  saveChanges();
});
function saveChanges(){
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
};



bot.on('messageCreate', async(message) => {

  if(message.author.bot || !message.channel.guild) return undefined;

  let args = message.content.toLowerCase().split(' ');

  let cmd = args[0].slice(prefix.length);

  if(cmd == `avatar`){

    let avt =  message.mentions[0] ? message.member.guild.members.get(message.mentions[0].id) : message.member.guild.members.find(m => m.user.id == args[1] || m.user.username.toLowerCase().includes(args[1]) || m.user.discriminator == args[1]) || message.member;

    let avtName;

    if(avt == message.member) {avtName = `Your`} else {avtName = `${avt.user.username}'s`};

    if(args[1] == 'server'){

      if(message.content.toLowerCase().endsWith('-url')) return bot.createMessage(message.channel.id, message.member.guild.iconURL || 'No Icon.');

      await bot.createMessage(message.channel.id, {embed: {image: { url: message.member.guild.iconURL || 'https://bitsofco.de/content/images/2018/12/broken-1.png' }, footer: { text: bot.user.username, icon_url: bot.user.avatarURL }, author: { name: 'Server Icon', icon_url: message.author.avatarURL }}});

    } else {

      if(message.content.toLowerCase().endsWith('-url')) return bot.createMessage(message.channel.id, avt.user.avatarURL || 'No Avatar.');

      await bot.createMessage(message.channel.id, {embed: {image: { url: avt.user.avatarURL || 'https://bitsofco.de/content/images/2018/12/broken-1.png'}, footer: { text: bot.user.username, icon_url: bot.user.avatarURL }, author: { name: `${avtName} Avatar`, icon_url: message.author.avatarURL }}});

  }

}

});











client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
