import { useGridSquare } from "@components/squareGrid/hooks/useSquareGrid/useSquareGrid";
import { SquareGrid } from "@components/squareGrid/SquareGrid";
import { squareApi } from "@services/squareApi/squareApi";
import { use } from "react";

const SquareGame = () => {
	const initialSquares = use(squareApi.getAll);
	const { squares, handleAddSquare } = useGridSquare(initialSquares);
	return (
		<div>
			<button onClick={handleAddSquare}>Add square</button>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
