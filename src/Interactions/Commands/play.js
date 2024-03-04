import { SlashCommandBuilder } from "discord.js";

import client from "../../client.js";

export default {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("Invite someone to play with you.")
		.addUserOption((option) => option.setName("user").setDescription("The user you want to play with.").setRequired(true)),
	run: async (interaction) => {
		if (client.games.get(interaction.channel.id)) return await interaction.reply({ embeds: [client.embeds.alreadyGame], ephemeral: true }).catch((err) => client.err(err));

		const user = interaction.options.getUser("user");
		const invite = client.invites.get(interaction.channel.id);
		if (!invite) {
			if (user.bot) return interaction.reply({ embeds: [client.embeds.userIsBot], ephemeral: true }).catch((err) => client.err(err));

			client.invites.set(interaction.channel.id, { from: interaction.user, to: user });
		}
	},
};
