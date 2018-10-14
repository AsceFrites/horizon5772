 const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: ANGEL");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le channel ! ' + member.displayName)
 
    }).catch(console.error)

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n Demandez à Angel pas à moi");
    }

    if (message.content === "Angel"){
        message.reply("Angel t moche :)");
        console.log("Commande Salut effectué")
        message.reply;
    }
    if (message.content === "Test"){
        message.channel.sendMessage("Test \n Test2")
    }

     
      if (message.content.split(" ")[0] == "*AEmbed"){//EMBED
        var embed = new Discord.RichEmbed()
        .setColor("#0b8cf1")
        .setTitle(message.content.slice("*AEmbed ".length))
        console.log("Commande test")
        message.channel.send({embed})
      }
 if (message.content === "AMOUR"){
  .setImage
 
});
