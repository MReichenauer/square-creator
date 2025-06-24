import { calculateCoordinates } from "./calculate/calculateCoordinates";
import type { BaseSquareType } from "@models/types/square";
import { forbiddenHexCodes } from "./colors/forbiddenHexCodes";
import { generateSquareColor } from "./colors/generateSquareColor";

const createNewSquare = (amountOfStoredSquares: number, previousSquare: BaseSquareType | null) => {
	const columns = Math.sqrt(amountOfStoredSquares);
	const invalidColors = forbiddenHexCodes(previousSquare ? previousSquare.color : null);
	const newSquare = {
		...calculateCoordinates(columns, previousSquare),
		color: generateSquareColor(invalidColors),
	};
	return newSquare;
};

export { createNewSquare };
