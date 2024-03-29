import client from "../client.js";
import chalk from "chalk";

export default {
	name: "interactionCreate",
	once: false,
	run: async (interaction) => {
		let path = "../Interactions/";
		if (interaction.isChatInputCommand()) path += `Commands/${interaction.commandName}.js`;
		else if (interaction.isButton()) path += `Buttons/${interaction.customId}.js`;
		else if (interaction.isStringSelectMenu()) path += `Menues/${interaction.customId}.js`;

		try {
			const file = await import(path);
			await file.default.run(interaction);
		} catch (err) {
			client.err(err);
		}
		client.info(`${chalk.yellow(`${path.replace("../Interactions/", "")}`)} was executed by ${chalk.red(interaction.user.username)}`);
	},
};
