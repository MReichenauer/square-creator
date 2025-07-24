import type { PropsWithChildren, Ref } from "react";

type CellProps = PropsWithChildren & {
	column: number;
	row: number;
	ref?: Ref<HTMLDivElement>;
};

const Cell = ({ column, row, children, ref }: CellProps) => {
	return (
		<div
			key={`${column}-${row}`}
			ref={ref}
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
