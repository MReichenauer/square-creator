import type { BaseSquareType, SquareType } from "@models/types/square";
import { getFormattedErrorResponseDetails } from "../utils/format/error/getFormattedErrorResponseDetails/getFormattedErrorResponseDetails";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const insertSquare = async (square: BaseSquareType) => {
	const response = await fetch(`${baseUrl}/square`, {
		method: "POST",
		body: JSON.stringify(square),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!response.ok) {
		const errorDetails = await getFormattedErrorResponseDetails(response);
		throw new Error(errorDetails);
	}

	const data: SquareType = await response.json();
	return data;
};
export { insertSquare };
