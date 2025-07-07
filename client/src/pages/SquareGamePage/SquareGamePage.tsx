import { ErrorBoundary } from "@components/errorBoundary/ErrorBoundary";
import { SquareGame } from "@components/squareGame/SquareGame";
import { SignalRContext } from "@contexts/signalR/SignalRContext";
import type { SquareType } from "@models/types/square";
import { squareApi } from "@services/squareApi/squareApi";
import { Suspense, use, useEffect, useState } from "react";
import ClientQueue from "./clientQueue/ClientQueue";
import styles from "./SquareGamePage.module.css";
const SquareGamePage = () => {
	const [squaresPromise, setSquaresPromise] = useState<Promise<SquareType[]> | null>(null);
	const signalRContext = use(SignalRContext);

	useEffect(() => {
		if (signalRContext.isAllowedToEnterGame) {
			setSquaresPromise(squareApi.getAll());
		} else {
			setSquaresPromise(null);
		}
	}, [signalRContext.isAllowedToEnterGame]);

	if (!signalRContext) {
		return <p>SignalR context failed to initiate</p>;
	}

	return (
		<section className={styles.container}>
			<h2>Square Game</h2>
			{squaresPromise ? (
				<ErrorBoundary fallback={"An error occurred while loading the game."}>
					<Suspense fallback={<p>Loading...</p>}>
						<SquareGame squaresPromise={squaresPromise} />
					</Suspense>
				</ErrorBoundary>
			) : (
				<ClientQueue />
			)}
		</section>
	);
};

export default SquareGamePage;
