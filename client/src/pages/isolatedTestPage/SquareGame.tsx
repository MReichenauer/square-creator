import { useGridSquare } from "@components/squareGrid/hooks/useSquareGrid/useSquareGrid";
import { SquareGrid } from "@components/squareGrid/SquareGrid";
import { squareApi } from "@services/squareApi/squareApi";
import { use } from "react";

const SquareGame = () => {
	const initialSquares = use(squareApi.getAll);

	const { squares, isPending, addstuff } = useGridSquare(initialSquares);

	console.log("isPending:", isPending, squares);

	return (
		<div>
			<button disabled={isPending} onClick={addstuff}>
				{isPending ? "Adding…" : "Add square"}
			</button>
			<pre>{JSON.stringify(squares)}</pre>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
