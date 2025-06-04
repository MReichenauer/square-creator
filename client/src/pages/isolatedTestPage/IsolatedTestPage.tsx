import type { SquareType } from "@models/types/squareType";
import { squareApi } from "@services/squareApi/squareApi";
import { useState } from "react";

const IsolatedTestPage = () => {
	const [data, setData] = useState<SquareType[]>([]);
	const handleClick = async () => {
		const squareData = await squareApi.getAll();
		if (squareData) {
			setData(squareData);
		}
	};
	return (
		<>
			<button onClick={handleClick}>Get all squares</button>
			<ul>
				{data?.map((square) => (
					<li key={square.id}>
						Id: {square.id} Color: {square.color} X: {square.x} Y: {square.y}
					</li>
				))}
			</ul>
		</>
	);
};

export { IsolatedTestPage };
