import { calculateCoordinates } from "./calculateCoordinates";
import type { BaseSquareType } from "@models/types/square";
import { forbiddenHexCodes } from "./colors/forbiddenHexCodes";
import { generateSquareColor } from "./colors/generateSquareColor";

const addSquare = (storedSquares: BaseSquareType[]) => {
	const columns = Math.sqrt(storedSquares.length);
	const invalidColors = forbiddenHexCodes(storedSquares);
	const previousSquare = storedSquares[storedSquares.length - 1];
	const newSquare = {
		...calculateCoordinates(columns, previousSquare),
		color: generateSquareColor(invalidColors),
	};
	return [...storedSquares, newSquare];
};

export { addSquare };
