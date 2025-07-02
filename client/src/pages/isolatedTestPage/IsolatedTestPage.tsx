import { Suspense, use, useEffect, useState } from "react";
import { SquareGame } from "../../components/squareGame/SquareGame.tsx";
import { ErrorBoundary } from "@components/errorBoundary/ErrorBoundary.tsx";
import { squareApi } from "@services/squareApi/squareApi.ts";
import type { SquareType } from "@models/types/square.ts";
import { SignalRContext } from "@contexts/signalR/SignalRContext.tsx";

const IsolatedTestPage = () => {
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
		<div>
			<h1>Square creator</h1>
			<ul>
				<li>Queue position: {signalRContext.positionInQueue}</li>
				<li>{signalRContext.isAllowedToEnterGame ? "Enter Game" : "Waiting in queue"}</li>
			</ul>
			{squaresPromise ? (
				<ErrorBoundary fallback={"An error occurred while loading the game."}>
					<Suspense fallback={<p>Loading...</p>}>
						<SquareGame squaresPromise={squaresPromise} />
					</Suspense>
				</ErrorBoundary>
			) : (
				<h2>Waiting in queue</h2>
			)}
		</div>
	);
};

export { IsolatedTestPage };
