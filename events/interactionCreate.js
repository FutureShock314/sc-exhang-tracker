const { Events, MessageFlags } = require('discord.js');

function getErrorText(err) {
  let errorText = `There was an error while running this code!\n\`${err}\``;
  return errorText;
}

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: getErrorText(error), flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: getErrorText(error), flags: MessageFlags.Ephemeral });
			}
		}
	},
};
