import type { HubConnection } from "@microsoft/signalr";
import type { Dispatch } from "react";

const closeConnection = async (hub: HubConnection, setErrorState: Dispatch<unknown>) => {
	hub.off("QueuePosition");
	hub.off("EnterGame");

	if (hub.state === "Connected") {
		try {
			await hub.invoke("LeaveQueue");
			await hub.stop();
		} catch (error) {
			setErrorState(error);
		}
	}
};
export { closeConnection };
