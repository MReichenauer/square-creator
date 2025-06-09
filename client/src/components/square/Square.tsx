import type { SquareType } from "@models/types/squareType";
import styles from "./Square.module.css";

type SquareProps = {
	square: SquareType;
};

const Square = ({ square }: SquareProps) => {
	return (
		<div className={styles.square} style={{ backgroundColor: square.color }}>
			<span className="screenReaderOnly">
				Square with the color: {square.color} and position x: {square.x} y: {square.y}
			</span>
		</div>
	);
};

export { Square };
