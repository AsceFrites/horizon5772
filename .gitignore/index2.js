const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token);

bot.on('message', message => {
        if (message.content === prefix + "Index"){
            message.channel.sendMessage("Index2 !");
        }
});
