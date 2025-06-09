import type { SquareType } from "@models/types/squareType";
import type { ErrorResponseType } from "../models/types/errorResponseType";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const getAllSquares = async () => {
	try {
		const response = await fetch(`${baseUrl}/square`);
		console.log("res", response);
		if (!response.ok) {
			const errorResponse: ErrorResponseType = await response.json();
			throw new Error(`Function: getAllSquares.Error: ${JSON.stringify(errorResponse, null, 2)}`);
		}
		const data: SquareType[] = await response.json();
		console.log(`Function: getAllSquares. Successful response:`, data);

		return data;
	} catch (error) {
		if (error instanceof Error) {
			return console.error(`Function: getAllSquares encountered an error: ${error.message}`);
		}
		console.error(`Function: getAllSquares encountered an unknown instance oferror: ${error}`);
	}
};
export { getAllSquares };
