const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token);

bot.on('message', message => {
        if (message.content === prefix + "help"){
            message.channel.sendMessage("Liste des commandes: \n **~test** : Tester le bot \n **~aembed** : Créer des Embed \n **Hugs** : Faites un câlin ! \n **~avatar** : Afficher votre avatar \n **~infodiscord** : Infos à propos d'Aena \n ***Bonne visite sur Aena ! :D***");
        }
    
        if (message.content === "~test5772"){
            message.reply("test :)");
            console.log("Commande Salut effectué")
            message.reply;
        }
        if (message.content === "~test"){
            message.channel.sendMessage("```Test 1...``` \n Test2 effectué \n ```Bot OK```")
              }
          
    
    if (message.content.split(" ")[0] == "~aembed"){//EMBED
             message.delete()
             var embed = new Discord.RichEmbed()
            .setColor("#febfd2")
            .setTitle(message.content.slice("~aembed ".length))
            console.log("Emmbed")
            message.channel.send({embed})
          }
    
           if (message.content === '~avatar') {
            message.reply(message.author.avatarURL);
          }
          
        if (message.content == "Hugs") { 
             message.channel.sendMessage("***Tiens un câlin !*** :D");
        }
        
       if(message.content === "~infodiscord") { 
             var embed = new Discord.RichEmbed()
             .setDescription("Information du Discord")
             .addField("Nom du discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateur sur le discord", message.guild.memberCount)
            .setColor("#0b8cf1")
         message.channel.sendEmbed(embed)
           
         }

        
         if (message.content.startsWith("~say")) {
          message.delete()
          const str = message.content.substring("~say".length)
          message.channel.sendMessage(str)
        }

        if(message.content === "~help2") { 
          var embed = new Discord.RichEmbed()
          .setDescription("***Liste des commandes :***")
          .addField("**~test : **", "Tester le bot.")
         .addField("**~aemebed : **", "Créer des Embed.")
         .addField("**Hugs :**", "Faites des câlins !")
         .addField("**~avatar :**", "Afficher votre avatar.")
         .addField("**~infodiscord :**", "Infos à propos d'Aena.")
         .addField("**~say :**", "Faire dire ce que vous souhaitez au bot !.")
         .addField(" \n ***Bonne visiste sur Aena !***",)
         .setColor("#1EE9CE")
      message.channel.sendEmbed(embed)
        }

        if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
          .setColor("#febfd2")
          .setTitle(message.content.slice("~sondage ".length))
          console.log("sondage")
          message.channel.send({embed})
          then(embedMessage => {
            embedMessage.react("👍");

          })
          
        }
        
    });
