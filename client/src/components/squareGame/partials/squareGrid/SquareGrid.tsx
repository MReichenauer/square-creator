import { Square } from "@components/squareGame/partials/square/Square";
import { Grid } from "@components/ui/grid/Grid";
import type { BaseSquareType } from "@models/types/square";
import { useEffect, useRef } from "react";

type SquareGridProps = {
	squares: BaseSquareType[];
};
const SquareGrid = ({ squares }: SquareGridProps) => {
	const lastSquareRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (lastSquareRef.current) {
			lastSquareRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
	}, [squares]);
	return (
		<Grid.Layout>
			{squares.map((square, index) => (
				<Grid.Cell
					key={`${square.x}-${square.y}`}
					column={square.x + 1}
					row={square.y + 1}
					children={<Square square={square} />}
					ref={index === squares.length - 1 ? lastSquareRef : null}
				/>
			))}
		</Grid.Layout>
	);
};

export { SquareGrid };
