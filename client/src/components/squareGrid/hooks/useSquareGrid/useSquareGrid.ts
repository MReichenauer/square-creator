import type { BaseSquareType } from "@models/types/square";
import { useState } from "react";
import { addSquare } from "./utils/addSquare";

const useGridSquare = (storedSquares: BaseSquareType[] = []) => {
	console.log("in hook");
	const [squares, setSquares] = useState<BaseSquareType[]>(storedSquares);
	const handleAddSquare = () => setSquares((prev) => addSquare(prev));

	return {
		squares,
		handleAddSquare,
	};
};

export { useGridSquare };
