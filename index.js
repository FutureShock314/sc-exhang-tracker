const Discord = require('discord.js');
const { env } = require('node:process');

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hello!') {
    msg.reply('don\'t you say hello to me');
  }
});

// Log our bot in using the token
client.login(process.env.TOKEN);
