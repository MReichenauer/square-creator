import { closeConnection } from "@services/signalR/utils/connection/closeConnection";
import { signalRHubConnection } from "@services/signalR/utils/connection/signalRHubConnection";
import { startConnection } from "@services/signalR/utils/connection/startConnection";
import { useEffect, useState } from "react";

const useSignalR = () => {
	const [positionInQueue, setPositionInQueue] = useState<number | null>(null);
	const [isAllowedToEnterGame, setIsAllowedToEnterGame] = useState(false);
	const [connectionError, setConnectionError] = useState<unknown | null>(null);
	const hub = signalRHubConnection;

	useEffect(() => {
		startConnection(hub, setConnectionError);
		hub.on("QueuePosition", (position: number) => {
			setPositionInQueue(position);
		});
		hub.on("EnterGame", () => {
			setIsAllowedToEnterGame(true);
			setPositionInQueue(0);
		});
		return () => {
			closeConnection(hub, setConnectionError);
		};
	}, [hub]);

	if (connectionError !== null) {
		throw connectionError;
	}

	return { positionInQueue, isAllowedToEnterGame };
};

export { useSignalR };
