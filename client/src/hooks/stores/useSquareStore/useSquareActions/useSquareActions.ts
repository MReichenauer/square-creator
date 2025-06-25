import type { BaseSquareType } from "@models/types/square";
import { useAddSquare } from "./partials/useAddSquare/useAddSquare";
import type { Dispatch, SetStateAction } from "react";

const useSquareActions = (squares: BaseSquareType[], setSquares: Dispatch<SetStateAction<BaseSquareType[]>>) => {
	const addSquareAction = useAddSquare(squares, setSquares);

	return {
		addSquareAction,
	};
};

export { useSquareActions };
