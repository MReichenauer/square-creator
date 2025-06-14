type SquareType = {
	id: number;
	x: number;
	y: number;
	color: string;
};

type BaseSquareType = Omit<SquareType, "id">;
export type { SquareType, BaseSquareType };
