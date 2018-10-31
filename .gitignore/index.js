const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")
var randnum = 0;

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token);

bot.on('message', message => {
        if (message.content === prefix + "start"){
            message.channel.sendMessage("Bot en cours d'éxecution !");
        }
    
        if (message.content === "~test5772"){
            message.reply("test :)");
            console.log("Commande Salut effectué")
            message.reply;
        }
        if (message.content === "~test"){
            message.channel.sendMessage("```Test 1...``` \n ```Test2 effectué``` \n ```Bot OK```")
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

        if(message.content === "~help") { 
          var embed = new Discord.RichEmbed()
          .setDescription("***Liste des commandes :***")
          .addField("**~test : **", "Tester le bot.")
         .addField("**~aemebed : **", "Créer des Embed.")
         .addField("**Hugs :**", "Faites des câlins !")
         .addField("**~avatar :**", "Afficher votre avatar.")
         .addField("**~infodiscord :**", "Infos à propos d'Aena.")
         .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
         .addField("**~sondage :**", "Faites voter vos idées !.")
         .addField(" \n ***Bonne visiste sur Aena !***", "**:D**")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
        }

        if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
          .setColor("#b83e3c")
          .setTitle(message.content.slice("~sondage ".length))
          console.log("sondage")
          message.channel.send({embed}).then(embedMessage => {
            embedMessage.react("👍");
            embedMessage.react("👎");


          })
          
        }

        if(message.content === "croix") { 
          var embed = new Discord.RichEmbed()
          .setDescription("Une croix. De ce qu'il y a de plus basique..")
          .setImage("https://cdn.discordapp.com/avatars/387291278670430208/46127661d0b7e952e31885c654936618.png?size=2048")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
        }

        if(message.content === "ollie") { 
          var embed = new Discord.RichEmbed()
          .setDescription("Un chat. De ce qu'il y a de plus basique..")
          .setImage("https://cdn.discordapp.com/attachments/468475819682168874/507159166671126568/Screenshot_20181031-122556.png")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
        }

      if (message.content === "~rdm"){
        random();
        
        if (randnum == 1){
          message.reply("Réponse numéro 1");
          
        }

        if (randnum == 2){
          message.reply("Réponse numéro 2");
        }

        if (randnum == 3){
          message.reply("Réponse numéro 3");
        }

      }
     
      function random(min, max) {
        min = Math.cell(0);
        max = Math.floor(3);
      randnum = Math.floor(Math.random() * (max - min +1) + min);
      }


        
    });
