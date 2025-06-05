import type { SquareType } from "@models/types/squareType";
import type { InsertSquareApiType } from "../models/types/insertSquareApiType";
import type { ErrorResponseType } from "../models/types/errorResponseType";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const insertSquare = async (square: InsertSquareApiType) => {
	try {
		const response = await fetch(`${baseUrl}/square`, {
			method: "POST",
			body: JSON.stringify(square),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			const errorResponse: ErrorResponseType = await response.json();
			throw new Error(`Function: insertSquare. Error: ${JSON.stringify(errorResponse, null, 2)}`);
		}

		const data: SquareType = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			return console.error(`Function: insertSquare encountered an error: ${error.message}`);
		}
		console.error(`Function: insertSquare encountered an unknown instance oferror: ${error}`);
	}
};
export { insertSquare };
