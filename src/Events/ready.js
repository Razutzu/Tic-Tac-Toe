import client from "../client.js";

export default {
	name: "ready",
	once: true,
	run: () => {
		client.success(`${client.user.username} is ready!`);
	},
};
