import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { SquareGrid } from "@components/squareGame/partials/squareGrid/SquareGrid";
import { use, useEffect } from "react";
import type { SquareType } from "@models/types/square";
import styles from "./SquareGame.module.css";
import Button from "@components/ui/button/Button";
import { useThrottleCallback } from "@hooks/utils/throttle/useThrottleCallback";
import { useIsUserActive } from "@hooks/utils/useIsUserActive/useIsUserActive";
import { useHandleUserInteractionEvents } from "@hooks/utils/events/useHandleUserInteractionEvents";
import { useNavigate } from "react-router-dom";
type SquareGameProps = {
	squaresPromise: Promise<SquareType[]>;
};

const SquareGame = ({ squaresPromise }: SquareGameProps) => {
	const initialSquares = use(squaresPromise);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;
	const { isActive, handleUserActivity } = useIsUserActive(5000);
	const throttleHandleUserActivity = useThrottleCallback(handleUserActivity, 1000);
	useHandleUserInteractionEvents(throttleHandleUserActivity);
	const navigate = useNavigate();

	useEffect(() => {
		if (isActive === false) {
			navigate({
				pathname: "/",
				search: "?sessionExpired=true",
			});
		}
	}, [isActive, navigate]);

	return (
		<div className={styles.container}>
			<code>isActive: {isActive ? "true" : "false"}</code>
			<p>Press the button below to add a new square to the board.</p>
			<Button variant="primary" label="Add square" disabled={isAddingSquare} onClick={addSquare} />
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
