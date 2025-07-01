import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { SquareGrid } from "@components/squareGame/partials/squareGrid/SquareGrid";
import { use } from "react";
import type { SquareType } from "@models/types/square";

type SquareGameProps = {
	squaresPromise: Promise<SquareType[]>;
};

const SquareGame = ({ squaresPromise }: SquareGameProps) => {
	const initialSquares = use(squaresPromise);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;

	return (
		<div>
			<button disabled={isAddingSquare} onClick={addSquare}>
				{isAddingSquare ? "Adding…" : "Add square"}
			</button>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
