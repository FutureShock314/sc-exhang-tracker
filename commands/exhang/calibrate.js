const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const relCfgPath = '../../cfg.json';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('calibrate')
    .setDescription('Calibrates the ExHang timer.'),
  
  async execute(interaction) {
    let cfg = require(relCfgPath);
    
    cfg.lastCalibrationTime = Math.floor(new Date().getTime() / 1000);
    
    // we have to write relative to the runner's location, not to the file's location. I do not know why. It just is.
    fs.writeFile('./cfg.json', JSON.stringify(cfg, null, 2), async (err) => err && await interaction.followUp(err));
    
    await interaction.reply(`\`lastCalibrationTime\` set to <t:${cfg.lastCalibrationTime}:R>`);
  }
}
