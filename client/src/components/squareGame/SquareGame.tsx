import styles from "./SquareGame.module.css";
import { use } from "react";
import type { SquareType } from "@models/types/square";
import { Button } from "@components/ui/button/Button";
import { SquareGrid } from "@components/squareGame/partials/squareGrid/SquareGrid";
import { useSquareStore } from "@hooks/stores/useSquareStore/useSquareStore";
import { useThrottleCallback } from "@hooks/utils/throttle/useThrottleCallback";
import { useIsUserActive } from "@hooks/utils/useIsUserActive/useIsUserActive";
import { useHandleUserInteractionEvents } from "@hooks/utils/events/useHandleUserInteractionEvents";
import { useRedirectInactiveUser } from "@hooks/utils/redirect/useRedirectInactiveUser";
import { minuteToMillisecond } from "@utils/calculate/minuteToMillisecond";
import { useRedirectOnRevisit } from "@hooks/utils/redirect/useRedirectOnRevisit";

type SquareGameProps = {
	squaresPromise: Promise<SquareType[]>;
};

const SquareGame = ({ squaresPromise }: SquareGameProps) => {
	const initialSquares = use(squaresPromise);
	const { squares, actions } = useSquareStore(initialSquares);
	const { addSquare, isAddingSquare } = actions.addSquareAction;
	const { isActive, handleUserActivity } = useIsUserActive(minuteToMillisecond(5));
	const throttleHandleUserActivity = useThrottleCallback(handleUserActivity, 1000);
	useHandleUserInteractionEvents(throttleHandleUserActivity);
	useRedirectInactiveUser(isActive);
	useRedirectOnRevisit();
	return (
		<div className={styles.container}>
			<p>Press the button below to add a new square.</p>
			<Button variant="primary" label="Add square" disabled={isAddingSquare} onClick={addSquare} />
			<SquareGrid squares={squares} />
		</div>
	);
};

export { SquareGame };
