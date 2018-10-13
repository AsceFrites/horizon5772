const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: ANGEL T PD");
    console.log("Connectedç");
});

bot.login("NTAwNzg2MTA1MDYzNTcxNDY2.DqP5Vw.HNZ3_MHRzJ4-MQYlvu07cCRIrZo");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n Demandez à Angel pas à moi");
    }

    if (message.content === "Angel"){
        message.reply("Angel t pd. :)");
        console.log("Commande Salut effectué")
        message.reply;
    }
    if (message.content === "Alice"){
        message.reply("Alice ca glisse @Angel ..");
        message.reply("Gangbang en maternelle :)");
        console.log("Commande Alice effectué")
        message.reply;
    }
    if (message.content === "Léa"){
        message.reply("KIKOUJAP PTDR ESPECE DE ROUSSE :)");
        console.log("Commande Rousse effectué")
        message.reply;
    }
    if (message.content === "Nyxiore"){
        message.reply("Lucas tête d'écureuil :)");
        console.log("Commande lUCAS effectué")
        message.reply;
    }
    if (message.content === "Nylonie"){
        message.reply("Rageuse Arabe qui se touche avec Cobra :)");
        console.log("Commande Arabe effectué")
        message.reply;
    }
});
