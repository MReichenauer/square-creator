import type { BaseSquareType } from "@models/types/square";
import { useState, useTransition } from "react";
import { createNewSquare } from "./utils/createNewSquare";
import { squareApi } from "@services/squareApi/squareApi";

const useGridSquare = (storedSquares: BaseSquareType[] = []) => {
	const [squares, setSquares] = useState<BaseSquareType[]>(storedSquares);
	const [isPending, startTransition] = useTransition();

	const addNewSquare = () => {
		const previousSquare = squares.length > 0 ? squares[squares.length - 1] : null;
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
		addNewSquare,
		squares,
		isPending,
	};
};

export { useGridSquare };
