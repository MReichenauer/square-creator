import { Suspense } from "react";
import { SquareGame } from "./SquareGame.tsx";
import { ErrorBoundary } from "./ErrorBoundary";

const IsolatedTestPage = () => {
	return (
		<div>
			<h1>Square creator</h1>
			<ErrorBoundary fallback={"An error occurred while loading the game."}>
				<Suspense fallback={<p>Loading...</p>}>
					<SquareGame />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export { IsolatedTestPage };
