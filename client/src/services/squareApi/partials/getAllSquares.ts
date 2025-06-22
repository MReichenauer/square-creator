import type { SquareType } from "@models/types/square";

import { getFormattedErrorResponseDetails } from "../utils/format/error/getFormattedErrorResponseDetails/getFormattedErrorResponseDetails";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

export const getAllSquares = async (): Promise<SquareType[]> => {
	const response = await fetch(`${baseUrl}/square/test-409`);
	if (!response.ok) {
		const errorDetails = await getFormattedErrorResponseDetails(response);
		throw new Error(errorDetails);
	}
	return await response.json();
};
