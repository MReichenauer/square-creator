import type { PropsWithChildren } from "react";

type CellProps = PropsWithChildren & {
	column: number;
	row: number;
};

const Cell = ({ column, row, children }: CellProps) => {
	return (
		<div
			key={`${column}-${row}`}
			style={{
				gridColumn: column,
				gridRow: row,
			}}
		>
			{children}
		</div>
	);
};

export { Cell };
