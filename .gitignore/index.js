const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready') , function() {
    bot.user.setGame("Command: *Help");
    console.log("Connectedç");
});

bot.login("NTAwNzg2MTA1MDYzNTcxNDY2.DqP5Vw.HNZ3_MHRzJ4-MQYlvu07cCRIrZo");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
