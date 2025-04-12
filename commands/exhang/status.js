const { SlashCommandBuilder } = require('discord.js');

let embed = {
  color: 0x3fd9ac,
  title: 'Executive Hangar Status',
  fields: [
    {
      name: 'Overview',
      value: ':green_square:  :green_square:  :red_square:  :red_square:  :red_square: - { until open }',
    },
    { name: '\u200b', value: ''},
    {
      name: ':green_square: Light 1',
      value: 'Turned green 25 minutes ago.',
    },
    {
      name: ':green_square: Light 2',
      value: 'some text here',
    },
    {
      name: ':red_square: Light 3',
      value: 'Turns green in 23 minutes.',
    },
    {
      name: ':red_square: Light 4',
      value: 'some text here',
    },
    {
      name: ':red_square: Light 5',
      value: 'some text here',
    },
    { name: '\u200b', value: '' },
    {
      name: 'ExHang { open/closed }',
      value: '{ opens/closes } in some number of minutes/hours',
    },
  ],
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Fetches ExHang status'),
  
  async execute(interaction) {
    await interaction.reply({
      embeds: [embed],
    });
  }
}
