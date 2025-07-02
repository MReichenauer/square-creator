import type { HubConnection } from "@microsoft/signalr";
import type { Dispatch } from "react";

const closeConnection = (hub: HubConnection, setErrorState: Dispatch<unknown>) => {
	hub.off("QueuePosition");
	hub.off("EnterGame");

	if (hub.state === "Connected") {
		hub.invoke("LeaveQueue").catch((error) => {
			setErrorState(error);
		});
		hub.stop().catch((error) => {
			setErrorState(error);
		});
	}
};
export { closeConnection };
