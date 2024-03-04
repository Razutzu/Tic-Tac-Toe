import { EmbedBuilder } from "discord.js";

import client from "../client.js";

export function send() {
	client.embeds = {
		alreadyGame: new EmbedBuilder().setColor(client.clr).setDescription("There is already an existent game on this channel."),
		userIsBot: new EmbedBuilder().setColor(client.clr).setDescription("The user should be a user, not a bot."),
	};
	client.components = {};
}
