import { SignalRContext } from "@contexts/signalR/SignalRContext";
import { use } from "react";
import styles from "./ClientQueue.module.css";

const ClientQueue = () => {
	const signalRContext = use(SignalRContext);
	return (
		<div className={styles.clientQueue}>
			<p>Once it is your turn, the game will start automatically.</p>
			<p>You're current position in the queue is: {signalRContext.positionInQueue}.</p>
		</div>
	);
};

export default ClientQueue;
