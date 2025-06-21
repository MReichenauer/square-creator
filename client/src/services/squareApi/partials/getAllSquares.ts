import type { SquareType } from "@models/types/square";
import { formatErrorDetails } from "../utils/format/formatErrorDetails";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

export const getAllSquares = async (): Promise<SquareType[]> => {
	const response = await fetch(`${baseUrl}/square/test-409`);
	if (!response.ok) {
		const errorDetails = await formatErrorDetails(response);
		throw new Error(errorDetails);
	}
	return await response.json();
};
