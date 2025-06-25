import type { BaseSquareType } from "@models/types/square";
import { createNewSquare } from "./utils/create/createNewSquare/createNewSquare";
import { useTransition, type Dispatch, type SetStateAction } from "react";
import { squareApi } from "@services/squareApi/squareApi";
import { getPreviousSquare } from "./utils/get/getPreviousSquare";

const useAddSquare = (squares: BaseSquareType[], setSquares: Dispatch<SetStateAction<BaseSquareType[]>>) => {
	const [isAddingSquare, startTransition] = useTransition();
	const addSquare = () => {
		const previousSquare = getPreviousSquare(squares);
		const square = createNewSquare(squares.length, previousSquare);
		setSquares((prev) => [...prev, square]);

		startTransition(async () => {
			try {
				await squareApi.insert(square);
			} catch (error) {
				setSquares((prev) => prev.slice(0, -1));
				throw error;
			}
		});
	};
	return {
		addSquare,
		isAddingSquare,
	};
};

export { useAddSquare };
