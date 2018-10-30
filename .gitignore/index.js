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
            message.channel.sendMessage("Test \n Test2 effectué \n ```Bot OK```")
        }
          
    
    if (message.content.split(" ")[0] == "~aembed"){//EMBED
            var embed = new Discord.RichEmbed()
            .setColor("#febfd2")
            .setTitle(message.content.slice("~aembed ".length))
            console.log("Commande test")
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

        if (command === 'clear') {
          const deleteCount = parseInt(args [0], 10);
         if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return msg.reply("Merci d'indiquer un nombre de message à supprimer entre 2 et 100");
          async function clear() {
          const fetched = await msg.channel.fetchMessages({limit: deleteCount});
           msg.channel.bulkDelete (fetched).catch(console.error);
          }
          clear();
        }
    });
