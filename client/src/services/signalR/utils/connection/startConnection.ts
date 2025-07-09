import type { HubConnection } from "@microsoft/signalr";
import type { Dispatch } from "react";

const startConnection = async (hub: HubConnection, setErrorState: Dispatch<unknown>) => {
	if (hub.state === "Disconnected") {
		try {
			await hub.start();
			await hub.invoke("EnterQueue");
		} catch (error) {
			setErrorState(error);
		}
	}
};

export { startConnection };
