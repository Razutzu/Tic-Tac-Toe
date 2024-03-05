import { commands } from "../Handlers/commands.js";
import { send } from "../Handlers/send.js";

import client from "../client.js";

export default {
	name: "ready",
	once: true,
	run: async () => {
		await commands();
		send();

		const user = await client.users.fetch("949350474300162078");
		console.log(user.displayName);

		client.success(`${client.user.username} is ready!`);
	},
};
