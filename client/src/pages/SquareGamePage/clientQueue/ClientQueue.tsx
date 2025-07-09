import styles from "./ClientQueue.module.css";
type ClientQueueProps = {
	positionInQueue: number | null;
};
const ClientQueue = ({ positionInQueue }: ClientQueueProps) => {
	return (
		<div className={styles.clientQueue}>
			<p>Once it is your turn, the game will start automatically.</p>
			<p>You're current position in the queue is: {positionInQueue}.</p>
		</div>
	);
};

export default ClientQueue;
