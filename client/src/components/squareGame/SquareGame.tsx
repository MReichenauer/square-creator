import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { SquareGrid } from "@components/squareGame/partials/squareGrid/SquareGrid";
import { use } from "react";
import type { SquareType } from "@models/types/square";
import styles from "./SquareGame.module.css";
import Button from "@components/ui/button/Button";
type SquareGameProps = {
	squaresPromise: Promise<SquareType[]>;
};

const SquareGame = ({ squaresPromise }: SquareGameProps) => {
	const initialSquares = use(squaresPromise);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;

	return (
		<div className={styles.container}>
			<p>Press the button below to add a new square to the board.</p>
			<Button variant="primary" label="Add square" disabled={isAddingSquare} onClick={addSquare} />
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
