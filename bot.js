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








client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.startsWith("say")) {
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You dont have** `ADMINISTRATOR` **permission**');
var args = message.content.trim().split(/ +/g).slice(1);
let cname = args[0];
let chan = message.guild.channels.find(element => element.name === cname);
if (chan) {
    let text = args.slice(1).join(" ");
    message.delete();
    chan.send(text);
} else {
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
   }
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



let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));

client.on("message", msg=>{

let id = "526702104849678340"; // ايديك

let role = "VIP"; // اسم رتبة الفيب

let Price = 100k; // السعر

let Price2 = Math.floor(Price-(Price*(1/100)));

if(!Price || Price < 1) return;

let cmd = msg.content.split(' ')[0];

if(cmd === `${prefix}buy`){

if(msg.author.bot) return;

if(!msg.channel.guild) return;

let embedvip = new Discord.RichEmbed()

.setColor("#42f4f4")

.setAuthor(msg.author.username, msg.author.displayAvatarURL)

.setThumbnail(msg.author.avatarURL)

.setTitle("**اختر الطريقة المناسبة لك**")

.addField("ل شراء الفي اي بي لنفسك","🔱",true )

.addField("ل شراء الفي اي بي ك هدية","🎁",true)

.setTimestamp()

.setFooter(client.user.username,client.user.displayAvatarURL);

msg.channel.send(embedvip).then(msgs2 =>{

msgs2.react("🔱").then(()=>{

  msgs2.react("🎁").then(()=>{

    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;

    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;

    const mec = msgs2.createReactionCollector(me, {time: 120000});

    const giftc = msgs2.createReactionCollector(gift, {time: 120000});

mec.on("collect", r=>{  

msgs2.delete()

if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");

let roleW = msg.guild.roles.find(r=>r.name == role);

if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)

msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل

إلى ${msg.guild.members.get(id)}

`).then( msgs =>{

const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);

msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })

.then( collected =>{

msgs.delete()

msg.reply(`تم اعطائك رتبة \`${role}\``);

msg.member.addRole(roleW);

}).catch(e => {});

})})

giftc.on("collect", r=>{

  msgs2.delete()

  let roleW = msg.guild.roles.find(r=>r.name == role);

  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)

msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل

إلى ${msg.guild.members.get(id)}

`).then( msgs =>{

  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);

  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })

  .then( collected =>{

  msgs.delete()

  genKey(msg,roleW);

  }).catch(e => {});

  })

})

})})})

///

}

if(cmd === `${prefix}used`){

  let args = msg.content.split(" ").slice(1)[0];

  if(!args) {   

    let embed = new Discord.RichEmbed()

    .setColor("#42f4f4")

    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)

    msg.reply(embed).then( z => z.delete(3000));

    return

}

  let embed = new Discord.RichEmbed()

.setTitle(`**جاري التحقق من الكود**`)

.setColor("#42f4f4")

  msg.reply(embed).then( msgs =>{

  if(vipKeys[args]){

    let hav = msg.member.roles.find(`name`, vipKeys[args].name);

    if(hav){

    let embed = new Discord.RichEmbed()

    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)

    .setColor("#42f4f4")

    msgs.edit(embed)

    return

    }

    let embed = new Discord.RichEmbed()

    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)

    .setColor("#42f4f4")

    msgs.edit(embed)

    msg.member.addRole(vipKeys[args]);

    delete vipKeys[args]

    save()

  }else{

    let embed = new Discord.RichEmbed()

    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)

    .setColor("#42f4f4")

    msgs.edit(embed)

  }});

}

});

function genKey(msg,role){

  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  var gift = "";

  for (var y = 0; y < 16; y++) {   ///16

    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;

  }

  vipKeys[gift] = role;

  let embed = new Discord.RichEmbed()

  .setColor("#42f4f4")

  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);

  msg.reply(embed);

  let embed2= new Discord.RichEmbed()

  .setAuthor(msg.author.username, msg.author.displayAvatarURL)

  .setThumbnail(msg.author.avatarURL)

  .addField("**Key Of Gift**", gift,true)

  .addField("Role",vipKeys[gift].name,true)

  .addField("This Key Made by", msg.author, true)

  .addField("The Room", msg.channel , true)

  .setTimestamp()

  .setFooter(client.user.username,client.user.displayAvatarURL)  

  msg.author.send(embed2);

  save()

}

function save(){

  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {

    if (err) console.log(err)

  });

}



client.login('NTk1MTg2MzUzMzkwNzQ3NjUz.XR8jUw.N5IAn-3NH2uTxm0M_PbkdK21nmA');
