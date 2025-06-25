import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { SquareGrid } from "@components/squareGrid/SquareGrid";
import { squareApi } from "@services/squareApi/squareApi";
import { use } from "react";

const SquareGame = () => {
	const initialSquares = use(squareApi.getAll);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;

	return (
		<div>
			<button disabled={isAddingSquare} onClick={addSquare}>
				{isAddingSquare ? "Adding…" : "Add square"}
			</button>
			<pre>{JSON.stringify(squares)}</pre>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
