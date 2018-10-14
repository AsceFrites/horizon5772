 const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: ANGEL");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(général => général.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n Demandez à Angel pas à moi");
    }

    if (message.content === "Angel"){
        message.reply("Angel t moche :)");
        console.log("Commande Salut effectué")
        message.reply;
    }
    if (message.content === "Test"){
        message.channel.sendMessage("Test \n Test2")
    }

     
      if (message.content.split(" ")[0] == "*AEmbed"){//EMBED
        var embed = new Discord.RichEmbed()
        .setColor("#0b8cf1")
        .setTitle(message.content.slice("*AEmbed ".length))
        console.log("Commande test")
        message.channel.send({embed})
      }
 
});
