import type { BaseSquareType } from "@models/types/square";
import { useState } from "react";
import { addSquare } from "./useSquareGrid/utils/addSquare";

const useGridSquare = (storedSquares: BaseSquareType[] = []) => {
	const [squares, setSquares] = useState<BaseSquareType[]>(storedSquares);
	const handleAddSquare = () => setSquares((prev) => addSquare(prev));

	return {
		squares,
		handleAddSquare,
	};
};

export { useGridSquare };
