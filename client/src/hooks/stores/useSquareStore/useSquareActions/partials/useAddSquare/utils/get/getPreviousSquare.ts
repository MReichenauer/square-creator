import type { BaseSquareType } from "@models/types/square";

const getPreviousSquare = (squares: BaseSquareType[]) => {
	return squares.length > 0 ? squares[squares.length - 1] : null;
};

export { getPreviousSquare };
