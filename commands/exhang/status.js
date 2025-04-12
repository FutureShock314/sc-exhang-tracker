const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Fetches ExHang status'),
  
  async execute(interaction) {
    await interaction.reply(
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
}
