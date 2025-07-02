import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { signalRHubConnection } from "./utils/connection/signalRHubConnection";
import { startConnection } from "./utils/connection/startConnection";
import { closeConnection } from "./utils/connection/closeConnection";

type SignalRContextType = {
	positionInQueue: number | null;
	isAllowedToEnterGame: boolean;
};

const SignalRContext = createContext<SignalRContextType>({ positionInQueue: null, isAllowedToEnterGame: false });

const SignalRContextProvider = ({ children }: PropsWithChildren) => {
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

	const contextValue = { positionInQueue, isAllowedToEnterGame };

	return <SignalRContext.Provider value={contextValue}>{children}</SignalRContext.Provider>;
};

export { SignalRContext, SignalRContextProvider };
