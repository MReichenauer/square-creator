import type { CoordinatesType } from "../../types/coordinatesType";

const calculateDirection = (columns: number, { x, y }: CoordinatesType) => {
	if (x === 0) return "right";
	if (y + 1 < columns) return "down";
	if (x > 0) return "left";
	return "initial";
};

export { calculateDirection };
