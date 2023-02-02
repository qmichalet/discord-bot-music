const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("resume")
		.setDescription("Resumes the current song."),
	execute: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guild);

		if (!queue) {
			await interaction.reply("There is no song playing.");
			retutn;
		}

		queue.setPaused(false);

		await interaction.reply("The current song has been resumed.");
	}
};
