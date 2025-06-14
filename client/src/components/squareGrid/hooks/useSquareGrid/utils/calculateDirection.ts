import type { CoordinatesType } from "../types/coordinatesType";

const calculateDirection = ({ x, y }: CoordinatesType, iteration: number) => {
	if (x === 0) return "right";
	if (y + 1 < iteration) return "down";
	if (x > 0) return "left";
	return "initial";
};

export { calculateDirection };
