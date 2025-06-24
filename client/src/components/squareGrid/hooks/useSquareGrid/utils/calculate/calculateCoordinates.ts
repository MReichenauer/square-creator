import type { CoordinatesType } from "../../types/coordinatesType";
import { calculateDirection } from "./calculateDirection";

const calculateCoordinates = (columns: number, prevCoordinates: CoordinatesType | null) => {
	const coordinates = { x: 0, y: 0, ...prevCoordinates };
	switch (calculateDirection(columns, coordinates)) {
		case "initial":
			break;
		case "right":
			coordinates.x = columns;
			coordinates.y = 0;
			break;
		case "down":
			coordinates.y++;
			break;
		case "left":
			coordinates.x--;
			break;
	}
	return coordinates;
};

export { calculateCoordinates };
