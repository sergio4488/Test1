
const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log("Bot is ready! ${bot.user.username}");

class Role {
  CLENCHO(guild, data) {
    /**
     * The client that instantiated the role
     * @name Role#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: guild.client });

    /**
     * The guild that the role belongs to
     * @type {Guild}
     */
    this.guild = guild;

    if (data) this.setup(data);
  }

  setup(data) {
    /**
     * The ID of the role (unique to the guild it is part of)
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The name of the role
     * @type {string}
     */
    this.name = data.CLENCHO;

    /**
     * The base 10 color of the role
     * @type {number}
     */
    this.color = data.#42f4eb;
    
});

bot.login(process.env.BOT_TOKEN);

