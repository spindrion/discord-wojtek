const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on("ready", () => {
 
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
 client.user.setActivity(`!komendy`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
 
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) === 0){

  
 
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command==="komendy"){
    const sayMessage = args.join(" ")
    if(sayMessage===""){
    message.channel.send("```!raid\n!witam\n!boss```\n")}
    else
    message.delete();
  }
  else
  if(command === "raid") {
    const sayMessage = args.join(" ")
    if(sayMessage===""){
    message.channel.send("https://i.redd.it/20uncps26jg11.jpg")}
    else
    message.delete();
  }
  else
  
  if(command === "witam"){
    const sayMessage = args.join(" ")
    if(sayMessage===""){
    message.channel.send("Witam. :thinking:")}
    else
    message.delete();
    
  }
  else
 
  if(command === "boss") {
    const sayMessage = args.join(" ");
    if (sayMessage === ""){message.channel.send("Przykladowe uzycie: ```!boss machamp``` Lista dostępna za pomocą komendy ```!lista``` ")} 
    else
    // TIER 1
    if (sayMessage === "chikorita"){message.channel.send("https://i.imgur.com/EhV0oL4.png")}
    else
    if (sayMessage === "cyndaquil"){message.channel.send("https://i.imgur.com/EhV0oL4.png")}
    else
    if (sayMessage === "magikarp"){message.channel.send("https://i.imgur.com/CvdDQuX.png")}
    else
    if (sayMessage === "sunkern"){message.channel.send("https://i.imgur.com/9SJ7bWJ.png")}
    else
    if (sayMessage === "totodile"){message.channel.send("https://i.imgur.com/gImji2b.png")}
    else
    if (sayMessage === "yanma"){message.channel.send("https://i.imgur.com/x1Oxg58.png")}
    else
    // TIER 2
    if (sayMessage === "exeggutor"){message.channel.send("https://i.imgur.com/VKmiyTK.png")}
    else
    if (sayMessage === "kirlia"){message.channel.send("https://i.imgur.com/khMKdHe.png")}
    else
    if (sayMessage === "mawile"){message.channel.send("https://i.imgur.com/K28XL13.png")}
    else
    if (sayMessage === "pineco"){message.channel.send("https://i.imgur.com/LJgGnoZ.png")}
    else
    if (sayMessage === "roselia"){message.channel.send("https://i.imgur.com/ki6U7IQ.png")}
    else
    // TIER 3
    if (sayMessage === "donphan"){message.channel.send("https://i.imgur.com/0nIZFfp.png")}
    else
    if (sayMessage === "machamp"){message.channel.send("https://i.imgur.com/m6UBP5T.png")}
    else
    if (sayMessage === "piloswine"){message.channel.send("https://i.imgur.com/stA5I7U.png")}
    else
    if (sayMessage === "raichu"){message.channel.send("https://i.imgur.com/RilDQQU.png")}
    else
    if (sayMessage === "tangela"){message.channel.send("https://i.imgur.com/QmQ0yof.png")}
    else
    // TIER 4
    if (sayMessage === "absol"){message.channel.send("https://i.imgur.com/6b8FM6b.png")}
    else
    if (sayMessage === "marowak"){message.channel.send("https://i.imgur.com/rFHEBFW.png")}
    else
    if (sayMessage === "rhydon"){message.channel.send("https://i.imgur.com/kZSE67Y.png")}
    else
    if (sayMessage === "tyranitar"){message.channel.send("https://i.imgur.com/04whoEB.png")}
    else
    if (sayMessage === "ursaring"){message.channel.send("https://i.imgur.com/KQ6ry1r.png")}
    else
    // TIER 5
    if (sayMessage === "moltres"){message.channel.send("https://i.imgur.com/6qeYvz4.png")}
    else
    if (sayMessage === "mewtwo"){message.channel.send("https://i.imgur.com/MNbYehI.png")}
    else
    if (sayMessage === "hooh"){message.channel.send("https://i.imgur.com/hxLfTBq.png")}
    else
    if (sayMessage === "regirock"){message.channel.send("https://i.imgur.com/zxtnQtn.png")}
    else{
    message.delete();
    message.channel.send("Nie ma takiego bossa! Sprawdz ```!lista```");
    }
}
    else
    if (command === "lista"){
    const sayMessage = args.join(" ")
    if(sayMessage===""){
    message.channel.send("```Tier 1: chikorita, cyndaquil, magikarp, sunkern, yanma\nTier 2: exeggutor, kirlia, mawile, pineco, roselia\nTier 3: donphan, machamp, piloswine, raichu, tangela\nTier 4: absol, marowak, rhydon, tyranitar, ursaring\nTier 5: regirock, mewtwo, hooh, moltres```")
    }
    else
    message.delete();
  }
  else{
    message.delete();
    message.channel.send("Nie znam takiej komendy! Sprawdz listę komend za pomocą ```!komendy``` ");
  }
}
else{
  message.delete();
}
});

//  ``` 

client.login(process.env.TOKEN);