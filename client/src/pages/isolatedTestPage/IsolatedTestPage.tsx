import { useGridSquare } from "@components/squareGrid/hooks/useSquareGrid/useSquareGrid";
import { SquareGrid } from "@components/squareGrid/SquareGrid";

const IsolatedTestPage = () => {
	const { squares, handleAddSquare } = useGridSquare([]);

	return (
		<div>
			<button onClick={handleAddSquare}>Add square</button>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { IsolatedTestPage };
