import { SignalRContext } from "@contexts/signalR/SignalRContext";
import { use } from "react";
import styles from "./ClientQueue.module.css";

const ClientQueue = () => {
	const signalRContext = use(SignalRContext);
	return (
		<section className={styles.clientQueue}>
			<h3>You have been placed in queue</h3>
			<p>Once it is your turn, the game will start automatically.</p>
			<p>You are currently at position: {signalRContext.positionInQueue}</p>
		</section>
	);
};

export default ClientQueue;
