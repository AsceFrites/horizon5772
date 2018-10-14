const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~Help");
    console.log("Connectedç");
});
bot.login(process.env.Token);

bot.on(
    'message', message => {
        if (message.content === prefix + "Help"){
            message.channel.sendMessage("Liste des commandes: \n **~test** : Tester le bot \n **~AEmbed** : Créer des Embed \n **~Avatar** : Afficher votre avatar");
        }
    
        if (message.content === "~test"){
            message.reply("test :)");
            console.log("Commande Salut effectué")
            message.reply;
        }
        if (message.content === "Test"){
            message.channel.sendMessage("Test \n Test2")
        }
    
         
          if (message.content.split(" ")[0] == "~AEmbed"){//EMBED
            var embed = new Discord.RichEmbed()
            .setColor("#0b8cf1")
            .setTitle(message.content.slice("*AEmbed ".length))
            console.log("Commande test")
            message.channel.send({embed})
          }
    
           if (message.content === '~avatar') {
            message.reply(message.author.avatarURL);
          }
          
        if (message.content == "Hugs") { 
             message.channel.sendMessage("***Tiens un câlin !*** :D");
        }
        
       if(message.content === "infodiscord") { 
             var embed = new Discord.RichEmbed()
             .setDescription("Information du Discord")
             .addField("Nom du discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateur sur le discord", message.guild.memberCount)
            .setColor("#0b8cf1")
         message.channel.sendEmbed(embed)
           
         }
        
    
    });
