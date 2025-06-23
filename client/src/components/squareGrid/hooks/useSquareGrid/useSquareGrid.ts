import type { BaseSquareType } from "@models/types/square";
import { useState, useTransition } from "react";
import { addSquare } from "./utils/addSquare";

const useGridSquare = (storedSquares: BaseSquareType[] = []) => {
	const [squares, setSquares] = useState<BaseSquareType[]>(storedSquares);
	const [isPending, startTransition] = useTransition();

	const addstuff = () => {
		const newSquare = addSquare(squares);
		setSquares((prev) => [...prev, newSquare]);

		startTransition(async () => {
			try {
				const apiSquare = newSquare;
				await apiAddSquare(apiSquare);
			} catch (error) {
				setSquares((prev) => prev.slice(0, -1));
				console.error("Error adding square:", error);
			}
		});
	};

	const apiAddSquare = async (newSquare: BaseSquareType) => {
		console.log("apiAddSquare");
		await new Promise((resolve) => setTimeout(resolve, 1500));
		console.log("Square added api:", newSquare);
	};

	return {
		addstuff,
		squares,
		isPending,
	};
};

export { useGridSquare };
