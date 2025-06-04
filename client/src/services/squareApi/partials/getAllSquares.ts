import type { SquareType } from "@models/types/squareType";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const getAllSquares = async () => {
	try {
		const response = await fetch(`${baseUrl}/square`);
		console.log("res", response);
		if (!response.ok) {
			throw new Error(`Function: getAllSquares. Response status: ${response.status}`);
		}
		const data: SquareType[] = await response.json();
		console.log(`Function: getAllSquares. Successful response:`, data);

		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Function: getAllSquares. Error message: ${error.message}`);
		}
		console.error(`Function: getAllSquares. Unknown instance of error: ${error}`);
	}
};
export { getAllSquares };
