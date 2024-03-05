import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";

import client from "../client.js";

export function send() {
	client.embeds = {
		alreadyGame: new EmbedBuilder().setColor(client.clr).setDescription("There is already an existent game on this channel."),
		userIsBot: new EmbedBuilder().setColor(client.clr).setDescription("The user should be a user, not a bot."),
		alreadyInvite: new EmbedBuilder().setColor(client.clr).setDescription("There is an active invite on this channel."),
		noInvite: new EmbedBuilder().setColor(client.clr).setDescription("You weren't invited to a game."),
		playSameUser: new EmbedBuilder().setColor(client.clr).setDescription("Why would you try to play with yourself."),
		inviteSent: new EmbedBuilder().setColor(client.clr).setDescription("Invitation sent successfully!"),
	};
	client.components = {
		invite: new ActionRowBuilder().addComponents(
			new ButtonBuilder().setCustomId("accept").setLabel("Yes").setStyle(ButtonStyle.Danger),
			new ButtonBuilder().setCustomId("reject").setLabel("Reject").setStyle(ButtonStyle.Success)
		),
	};
}
