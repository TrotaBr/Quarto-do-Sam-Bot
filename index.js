const Discord = require("discord.js")
const client = new Discord.Client()
const pref = "s.";
const prefix = pref.toLowerCase() || pref.toUpperCase();
channel = client.channels.cache.get('828968994139537420');

client.config = {
    TOKEN: 'coloca o token aqui',
    prefix: "!r",
    cooldown: 15000
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
//test commands
client.on("message", msg => {
    if (msg.content === (prefix + "ping") ) {
      msg.reply("pong");
    }
  })
  client.on("message", msg => {
    if (msg.content === ("facada") ) {
      msg.reply("Bolsonaro");
    }
  })
  client.on("message", msg => {
    if (msg.content === ("stalin") ) {
      msg.channel.send("meu idolo");
    }
  })
  //comandos fodas
  client.on('message', message => {
    if (message.content.startsWith(prefix + 'say')) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("**" + SayMessage + "**")
        message.channel.send("- " + `**${message.author}**`)
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'aviso')) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(7).trim();
        message.channel.send({embed: {
            author: {
                name: "Aviso Importante",
                icon_url: "https://media.discordapp.net/attachments/828968968198029345/828989598809325608/download-15.jpg"
            },
            footer: {
                icon_url: message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }),
                text: ("postado por " + message.author.username)
              },
            color: 11010108,
            description: SayMessage
        }});
    }
});


client.on('message', message => {
    
    const user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    if (message.content.startsWith(prefix + 'avatar')) {
      var member = message.mentions.members.first();
      let embed = new Discord.MessageEmbed()
    .setAuthor(user.username)
    .setImage(avatar)
    .setColor('#275BF0')
    
      message.channel.send(embed)
    }
  });
client.login(client.config.TOKEN);
