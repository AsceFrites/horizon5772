 const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: ANGEL T PD");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


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

    let showHelp = function (msg, args) {
        let embed = new Discord.RichEmbed()
          .setTitle(`Liste des commandes`)
          .setDescription(`${Object.keys(commands).length} commandes sont disponibles`)
          .setColor("#0b8cf1")
          .setTimestamp()
          .setFooter(`Demandé par ${msg.author.username}`, msg.author.avatarURL);
      
        for (com in commands) {
          if (commands[com]["show"]) {
            embed.addField(commands[com]["name"], commands[com]["desc"] + "\n" + commands[com]["format"]);
          }
        }
      
        msg.channel.send({
          embed
        });
      }   
      if (message.content.split(" ")[0] == "*AEmbed"){//EMBED
        var embed = new Discord.RichEmbed()
        .setColor("#0b8cf1")
        .setTitle(message.content.slice("*AEmbed ".length))
        console.log("Commande test")
        message.channel.send({embed})
      }  
});
