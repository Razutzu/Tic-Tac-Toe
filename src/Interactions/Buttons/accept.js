import client from "../../client.js";

export default {
	run: async (interaction) => {
		if (client.games.get(interaction.channel.id)) return await interaction.reply({ embeds: [client.embeds.alreadyGame], ephemeral: true }).catch((err) => client.err(err));

		const invite = client.invites.get(interaction.channel.id);
		if (!invite) return await interaction.reply({ embeds: [client.embeds.noInvite], ephemeral: true }).catch((err) => client.err(err));
	},
};
