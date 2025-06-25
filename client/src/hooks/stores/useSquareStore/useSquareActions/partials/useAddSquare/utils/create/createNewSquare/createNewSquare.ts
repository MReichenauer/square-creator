import type { BaseSquareType } from "@models/types/square";
import { forbiddenHexCodes } from "./utils/colors/forbiddenHexCodes";
import { calculateCoordinates } from "./utils/calculate/calculateCoordinates";
import { generateSquareColor } from "./utils/colors/generateSquareColor";

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
