import { commands } from "../Handlers/commands.js";
import { invites } from "../Handlers/invites.js";
import { send } from "../Handlers/send.js";

import client from "../client.js";

export default {
	name: "ready",
	once: true,
	run: async () => {
		await commands();
		send();

		client.success(`${client.user.username} is ready!`);
	},
};
