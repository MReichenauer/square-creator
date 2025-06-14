import type { BaseSquareType } from "@models/types/square";

const forbiddenHexCodes = (storedSquares: BaseSquareType[] | []) => {
	return [
		storedSquares[storedSquares?.length - 1]?.color,
		getComputedStyle(document.documentElement).getPropertyValue("--primary-background-color-light"),
		getComputedStyle(document.documentElement).getPropertyValue("--primary-background-color-dark"),
	];
};

export { forbiddenHexCodes };
