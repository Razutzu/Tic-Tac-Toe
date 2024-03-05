import { SlashCommandBuilder } from "discord.js";

import client from "../../client.js";

export default {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("Invite someone to play with you.")
		.addUserOption((option) => option.setName("user").setDescription("The user you want to play with.").setRequired(true)),
	run: async (interaction) => {
		if (client.games.get(interaction.channel.id)) return await interaction.reply({ embeds: [client.embeds.alreadyGame], ephemeral: true }).catch((err) => client.err(err));

		if (client.invites.get(interaction.channel.id)) return await interaction.reply({ embeds: [client.embeds.alreadyInvite], ephemeral: true }).catch((err) => client.err(err));

		const user = interaction.options.getUser("user");

		if (user.bot) return await interaction.reply({ embeds: [client.embeds.userIsBot], ephemeral: true }).catch((err) => client.err(err));

		client.invites.set(interaction.channel.id, { from: interaction.user, to: user });

		await interaction.channel
			.send({ content: `${user.toString()}, do you want to play with ${interaction.user.toString()}`, components: [client.components.invite] })
			.catch((err) => client.err(err));

		return await interaction.reply({ embeds: [client.embeds.inviteSent], ephemeral: true }).catch((err) => client.err(err));
	},
};
