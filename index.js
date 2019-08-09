const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log("Pulse Design Pool Boy is ready to work! ${bot.user.username}");

    try {
        let link = await bot.generatorInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "rc":
                message.channel.send("*Recuitment is closed at the momment.*");
                break;
                
                    
        }
    }  
)


bot.login(process.env.BOT_TOKEN);

