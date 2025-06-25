import type { BaseSquareType } from "@models/types/square";
import styles from "./Square.module.css";

type SquareProps = {
	square: BaseSquareType;
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
