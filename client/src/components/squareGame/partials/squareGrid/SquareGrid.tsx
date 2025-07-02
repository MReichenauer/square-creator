import { Square } from "@components/squareGame/partials/square/Square";
import { Grid } from "@components/ui/grid/Grid";
import type { BaseSquareType } from "@models/types/square";

type SquareGridProps = {
	squares: BaseSquareType[];
};
const SquareGrid = ({ squares }: SquareGridProps) => {
	return (
		<Grid.Layout>
			{squares.map((square) => (
				<Grid.Cell
					key={`${square.x}-${square.y}`}
					column={square.x + 1}
					row={square.y + 1}
					children={<Square square={square} />}
				/>
			))}
		</Grid.Layout>
	);
};

export { SquareGrid };
