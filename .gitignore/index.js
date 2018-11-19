const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("~")

bot.on('ready', function() {
    bot.user.setGame("Commandes: ~help");
    console.log("Connectedç");
});

bot.login(process.env.Token1);

bot.on('message', message => {
        if (message.content === prefix + "start"){
            message.channel.sendMessage("Bot en cours d'éxecution !");
        }
    
        
        if (message.content === "~test"){
            message.channel.sendMessage("```css \n Test 1...```  ```Test1 OK```  ```Bot OK```")
              }
          
    
    if (message.content.split(" ")[0] == "~embed "){//EMBED
             message.delete()
             var embed = new Discord.RichEmbed()
            .setColor("#FF7F50")
            .setDescription(message.content.slice("~embed ".length))
            console.log("Embed")
            message.channel.send({embed})
          }

    
          if (message.content === '~avatar') {
            let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("RANDOM")
            message.channel.send(embed)
          }
          
        
       if(message.content === "~infodiscord") { 
             var embed = new Discord.RichEmbed()
             .setTitle("Information du Discord")
             .addField("Nom du discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoins le", message.member.joinedAt)
            .addField("Utilisateur sur le discord", message.guild.memberCount)
            .addField("Nombre de catégories et de salons", message.guild.channels.size)
            .setFooter("La Friterie")
            .setColor("RANDOM")
         message.channel.sendEmbed(embed)
           
         }

        
         if (message.content.startsWith("~say")) {
          message.delete()
          const str = message.content.substring("~say".length)
          message.channel.sendMessage(str)
        }

        if(message.content === "~help") { 
          var embed = new Discord.RichEmbed()
          .setTitle("Liste des commandes :")
          .addField("**~LaCarte**", "Renseignez vous sur nos produits à consommer !")
          .addField(" \n **~test : **", "Tester le bot.")
         .addField("**~embed : **", "Créer des Embed.")
         .addField("**~avatar :**", "Afficher votre propre avatar.")
         .addField("**~infodiscord :**", "Infos à propos du serveur.")
         .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
         .addField("**~sondage :**", "Faites voter vos idées !.")
         .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
         .addField(" \n ***Bonne visite à la Friterie ! Et bon appétit !***", "**:D**")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
        }

        if(message.content === "~LaCarte"){
            var embedC = new Discord.RichEmbed()
            .setTitle("La Carte de la Friterie")
            .addField(" \n Frites ------", "------Avec la commande *Frites*")
            .addField(" \n Et encore d'autres à venir ! ----", "------Bon appétit !")
        }


        if (message.content.split(" ")[0] == "~sondage"){//sondage
          message.delete()
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(message.content.slice("~sondage ".length))
          console.log("sondage")
          message.channel.send({embed}).then(embedMessage => {
            embedMessage.react("👍");
            embedMessage.react("👎");


          })
              

        }


    var randnum = 0

        function randomc(min, max){
          min = Math.ceil(0);
          max = Math.floor(5);
          randnum = Math.floor(Math.random() * (max - min +1)+ min);
      }

      if (message.content === "cat"){
        randomc()
        if (randnum ==1){
          var embed = new Discord.RichEmbed()
          .setDescription("1")
          .setImage("https://cdn.discordapp.com/attachments/473614695803125790/507191336206598165/FB_IMG_1540575966336.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }
     
        if (randnum ==2){
          var embed = new Discord.RichEmbed()
          .setDescription("2")
          .setImage("https://cdn.discordapp.com/attachments/473614695803125790/507191766286598154/image4.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==3){
          var embed = new Discord.RichEmbed()
          .setDescription("3")
          .setImage("https://media.discordapp.net/attachments/473614695803125790/507197431847452674/Screenshot_20181031-124649.png?width=429&height=665")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==4){
          var embed = new Discord.RichEmbed()
          .setDescription("4")
          .setImage("https://media.discordapp.net/attachments/473614695803125790/507191436077301781/FB_IMG_1537528278988.jpg")
         .setColor("#RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==5){
          var embed = new Discord.RichEmbed()
          .setDescription("5")
          .setImage("https://media.discordapp.net/attachments/473614695803125790/507197854629101568/Screenshot_20181024-235809.png")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

       
    }

    if(message.content === "~listfun") { 
      var embed1 = new Discord.RichEmbed()
      .setDescription("***Liste des commandes fun :***")
      .addField("**cat : **", "Fait apparaitre une image de chat.")
      .addField("**Hugs :**", "Faites des câlins !")
      .addField("**Et d'autres à venir..**", "Proposez vos idées..")
     .setColor("#8800fc")
  message.channel.sendEmbed(embed1)
    }
      

    var randhug = 0

        function random(min, max){
          min = Math.ceil(0);
          max = Math.floor(4);
          randhug = Math.floor(Math.random() * (max - min +1)+ min);
      }

      if (message.content === "Hugs"){
        random()
        if (randhug ==1){
          var embed = new Discord.RichEmbed()
          .setDescription("***Tiens un câlin ! :D***")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }
     
        if (randhug ==2){
          var embed = new Discord.RichEmbed()
          .setDescription("***Non ?! T'as cru que j'étais ton pote ?*** ")
         .setColor("#000000")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }

        if (randhug ==3){
          var embed = new Discord.RichEmbed()
          .setDescription("***Petit câlin - qui fait du bien.~***")
         .setColor("#C71585")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }

        if (randhug ==4){
          var embed = new Discord.RichEmbed()
          .setDescription("***Full of hugs for you!*** ")
         .setColor("#FFB6C1")
      message.channel.sendEmbed(embed)
            console.log(randhug);
        }
        
    }
        

        if(message.content === "Frites"){//FRITES
            return message.reply("Merci de mentionner une frite avec une sauce ! Liste des sauces avec la commande *Sauces frites*")
        }else{
             if(message.content === "Sauces frites"){
                var embedfr = new Discord.RichEmbed()
                .setDescription("**Voici la liste des sauces pour vos frites !**")
                .addField("Sauce Mayonnaise : ", "*Frites mayonnaise* ")
                .addField("Sauce Ketchup : ", "*Frites ketchup*")
                .setColor("RANDOM")
               message.channel.sendEmbed(embedfr);
            }

            if(message.content === "Frites mayonnaise"){
                var embedfr1 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites mayonnaise !**")
                .setImage("https://media.discordapp.net/attachments/513815805331374082/514080743882883093/241984.jpg")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr1);
             }

            if(message.content === "Frites ketchup"){
                var embedfr2 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites ketchup !**")
                .setImage("https://media.discordapp.net/attachments/513815805331374082/514080743882883087/barquette-de-frites-avec-du-ketchup-10949896twism.jpg?width=663&height=663")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr2);
             }
            
            }

     });
