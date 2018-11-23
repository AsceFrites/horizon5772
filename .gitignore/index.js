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
            .setDescription(message.content.slice("~embed ".length))
            console.log("Embed")
            message.channel.send({embed})
          }

    
          if (message.content === "~avatar") {
        var embed5 = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("RANDOM")
            message.channel.send({embed5})
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
            .addField(" \n Une multitude de boisson-----", "-----Avec la commande *~Boissons*")
            .addField(" \n Et encore d'autres à venir ! ----", "------Bon appétit !")
            message.channel.sendEmbed(embedC)
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
          max = Math.floor(6);
          randnum = Math.floor(Math.random() * (max - min +1)+ min);
      }

      if (message.content === "~frites"){
        randomc()
        if (randnum ==1){
          var embed = new Discord.RichEmbed()
          .setDescription("1")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163546272038922/frite-belge-friteuse-pro.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }
     
        if (randnum ==2){
          var embed = new Discord.RichEmbed()
          .setDescription("2")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163545718521868/images_3.jpeg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==3){
          var embed = new Discord.RichEmbed()
          .setDescription("3")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163545718521866/ls.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==4){
          var embed = new Discord.RichEmbed()
          .setDescription("4")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163544506499072/telechargement_4.jpeg")
         .setColor("#RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==5){
          var embed = new Discord.RichEmbed()
          .setDescription("5")
          .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163543906451479/348s.jpg")
         .setColor("RANDOM")
      message.channel.sendEmbed(embed)
            console.log(randnum);
        }

        if (randnum ==6){
            var embed = new Discord.RichEmbed()
            .setDescription("6")
            .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514163543906451476/536d9bf8b164c6babb8d7b14a2e694c5-1302886126.jpg")
           .setColor("RANDOM")
        message.channel.sendEmbed(embed)
              console.log(randnum);
          }

       
    }

    if(message.content === "~listfun") { 
      var embed1 = new Discord.RichEmbed()
      .setDescription("***Liste des commandes fun :***")
      .addField("**~frites : **", "Fait apparaitre une image de frites !!.")
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
                .setDescription("**Voici la liste des accompagnements pour vos frites !**")
                .addField("Sauce Mayonnaise : ", "*Frites mayonnaise* ")
                .addField("Sauce Ketchup : ", "*Frites ketchup*")
                .addField("Frites sans sauce : ", "*Frites natures*")
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
            
             if(message.content === "Frites natures"){
                var embedfr22 = new Discord.RichEmbed()
                .setDescription("**Et voici vos frites natures !**")
                .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514165247809028096/frites_1.jpg")
                .setColor("RANDOM")
              message.channel.sendEmbed(embedfr22);
             }
            }

             if(message.content === "~Boissons"){
                    var embedb = new Discord.RichEmbed()
                    .setDescription("**Voici la liste des boissons pour vous hydrater !**")
                    .addField("Tropico : ", "*BTropico* ")
                    .addField("Coca-Cola : ", "*BCoca*")
                    .addField("Ice Tea: ", "*BIce tea*")
                    .addField("Sprite : ", "*BSprite*")
                    .addField("Fanta : ", "*BFanta*")
                    .addField("Arizona : ", "*BArizona*")
                    .setColor("RANDOM")
                   message.channel.sendEmbed(embedb);
                }
    
                if(message.content === "BTropico"){
                    var embedfr1 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Tropico bien frais !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514116810530881547/canette-tropico.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr1);
                 }
    
                if(message.content === "BCoca"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Coca comme vous l'aimez !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514116145419255808/Coca-Cola-Clear-Transparent3_Cd-Mentiel-Magazine-e1532702616628.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BIce tea"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Ice Tea !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514117211686699010/toplipton1.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BSprite"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Voila donc du bon Sprite !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514117596681994281/depositphotos_93303834-stock-photo-soft-drink-sprite.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BFanta"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Fanta bien frais !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514118030515634193/Fanta-Lemon-discontinued-fizzy-drink-981522.png")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }

                 if(message.content === "BArizona"){
                    var embedfr2 = new Discord.RichEmbed()
                    .setDescription("**Et voici votre Arizona !**")
                    .setImage("https://cdn.discordapp.com/attachments/513815805331374082/514113676673024021/azcowboy1-2774.5l.jpg")
                    .setColor("RANDOM")
                  message.channel.sendEmbed(embedfr2);
                 }
                
                

     });
