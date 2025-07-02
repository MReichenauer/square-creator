import type { SquareType } from "@models/types/square";

import { getFormattedErrorResponseDetails } from "../utils/format/error/getFormattedErrorResponseDetails/getFormattedErrorResponseDetails";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const getAllSquares = async () => {
	const response = await fetch(`${baseUrl}/square`);
	if (!response.ok) {
		const errorDetails = await getFormattedErrorResponseDetails(response);
		throw new Error(errorDetails);
	}
	const data: SquareType[] = await response.json();
	return data;
};

export { getAllSquares };
