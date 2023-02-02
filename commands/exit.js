const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("exit")
		.setDescription("Exits the voice channel."),
	execute: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guild);

		if (!queue) {
			await interaction.reply("There is no song playing.");
			retutn;
		}

		queue.destroy();

		await interaction.reply("Sniff :'(");
	}
};
