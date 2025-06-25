import type { BaseSquareType } from "@models/types/square";
import { useState } from "react";
import { useSquareActions } from "./useSquareActions/useSquareActions";

const useSquareStore = (storedSquares: BaseSquareType[] = []) => {
	const [squares, setSquares] = useState<BaseSquareType[]>(storedSquares);
	const actions = useSquareActions(squares, setSquares);

	return {
		squares,
		actions,
	};
};

export { useSquareStore };
