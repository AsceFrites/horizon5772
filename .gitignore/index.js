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
          
    
    if (message.content.split(" ")[0] == "~embed"){//EMBED
             message.delete()
             var embed = new Discord.RichEmbed()
            .setColor("#FF7F50")
            .setDescription(message.content.slice("~aembed ".length))
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
          .addField("**~test : **", "Tester le bot.")
         .addField("**~emebed : **", "Créer des Embed.")
         .addField("**Hugs :**", "Faites des câlins !")
         .addField("**~avatar :**", "Afficher votre propre avatar.")
         .addField("**~infodiscord :**", "Infos à propos du serveur.")
         .addField("**~say :**", "Faites dire ce que vous souhaitez au bot !.")
         .addField("**~sondage :**", "Faites voter vos idées !.")
         .addField("**~listfun :**", "Afficher la liste des commandes.. inutile")
         .addField(" \n ***Bonne visiste à la Friterie !***", "**:D**")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
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

        if(message.content === "croix") { 
          var embed = new Discord.RichEmbed()
          .setDescription("Une croix. De ce qu'il y a de plus basique..")
          .setImage("https://cdn.discordapp.com/avatars/387291278670430208/46127661d0b7e952e31885c654936618.png?size=2048")
         .setColor("#8800fc")
      message.channel.sendEmbed(embed)
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
      .addField("**croix : **", "...✟...")
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

    if(message.content === "Frites"){ 
        var embedfr = new Discord.RichEmbed()
        .addField("**Quelle sauce avec ceci ?**")
       .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514072613606129675/tempo-65-1080x675.jpg")
        .addField("***Liste des sauces : ***")
        .addField("**Mayonnaise**")
        .addField("***Ketchup***")
        .setColor("RANDOM")
       message.channel.sendEmbed(embedfr);

       if(message.content === "Mayonnaise"){
        var embedfr1 = new Discord.RichEmbed()
        .addField("**Et voici vos frites mayonnaise !**")
       .setImage("https://media.discordapp.net/attachments/513815805331374082/514080743882883093/241984.jpg")
        .setColor("RANDOM")
       message.channel.sendEmbed(embedfr1);
       }else{
        message.channel.sendMessage("Merci de préciser une sauce valide");  
       }

        
       if(message.content === "Ketchup"){
        var embedfr2 = new Discord.RichEmbed()
        .addField("**Et voici vos frites surmonté de ketchup !**")
       .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514080743882883087/barquette-de-frites-avec-du-ketchup-10949896twism.jpg")
        .setColor("RANDOM")
       message.channel.sendEmbed(embedfr2);
       }else{
        message.channel.sendMessage("Merci de préciser une sauce valide");  
       }
    }
     

     });
