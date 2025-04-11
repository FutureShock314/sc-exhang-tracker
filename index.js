const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

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

client.on('messageCreate', msg => {
  console.log(msg);
  
  if (msg.content === '!exhang') {
    msg.channel.send(
      `
      this is a test message
      :green_square: :green_square: :red_square: :red_square: :red_square:
      
      Light 1: never
      Light 2: idk
      Light 3: maybe if this were actually finished I could tell you
      Light 4: ...
      Light 5: ...
      
      Next hangar open: ...
      `.replace(/  +/g, '')
    );
  }
  
});

// Log our bot in using the token
client.login(process.env.TOKEN);
