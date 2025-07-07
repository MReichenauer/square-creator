import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { SquareGrid } from "@components/squareGame/partials/squareGrid/SquareGrid";
import { use } from "react";
import type { SquareType } from "@models/types/square";
import styles from "./SquareGame.module.css";
type SquareGameProps = {
	squaresPromise: Promise<SquareType[]>;
};

const SquareGame = ({ squaresPromise }: SquareGameProps) => {
	const initialSquares = use(squaresPromise);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;

	return (
		<div className={styles.container}>
			<button disabled={isAddingSquare} onClick={addSquare}>
				{isAddingSquare ? "Adding…" : "Add square"}
			</button>
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
