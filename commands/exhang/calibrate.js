const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const cfgPath = '../../cfg.json';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('calibrate')
    .setDescription('Calibrates the ExHang timer.'),
  
  async execute(interaction) {
    let rawCfg = fs.readFileSync(cfgPath, 'utf8');
    let cfg = JSON.stringify(rawCfg, null, 2);
    console.log(cfg);
    
    cfg.zeroLightsTime = 'goodbye';
    fs.writeFileSync(cfgPath, cfg);
  }
}
