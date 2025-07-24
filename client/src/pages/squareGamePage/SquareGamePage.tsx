import { ErrorBoundary } from "@components/errorBoundary/ErrorBoundary";
import { SquareGame } from "@components/squareGame/SquareGame";
import type { SquareType } from "@models/types/square";
import { squareApi } from "@services/squareApi/squareApi";
import { Suspense, useState } from "react";
import styles from "./SquareGamePage.module.css";
import { useSignalR } from "@services/signalR/hooks/useSignalR";
import { ClientQueue } from "./partials/clientQueue/ClientQueue";

const SquareGamePage = () => {
	const [squaresPromise, setSquaresPromise] = useState<Promise<SquareType[]> | null>(null);
	const { positionInQueue, isAllowedToEnterGame } = useSignalR();

	if (isAllowedToEnterGame && squaresPromise === null) {
		setSquaresPromise(squareApi.getAll());
	}

	return (
		<section className={`${styles.section} pageFlexColContainer`}>
			{squaresPromise ? (
				<ErrorBoundary fallback={"An error occurred while loading the game."}>
					<h2>Square Game</h2>
					<Suspense fallback={<p>Loading...</p>}>
						<SquareGame squaresPromise={squaresPromise} />
					</Suspense>
				</ErrorBoundary>
			) : (
				<>
					<h2>You have been placed in queue</h2>
					<ClientQueue positionInQueue={positionInQueue} />
				</>
			)}
		</section>
	);
};

export { SquareGamePage };
