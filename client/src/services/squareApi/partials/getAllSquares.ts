import type { SquareType } from "@models/types/square";

const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

export const getAllSquares = async (): Promise<SquareType[]> => {
	const response = await fetch(`${baseUrl}/square`);
	if (!response.ok) {
		const isResponseApplicationJson = response.headers.get("Content-Type")?.includes("application/json") ? true : false;

		const formatedErrorResponseBody = isResponseApplicationJson ? JSON.stringify(await response.json(), null, 2) : null;

		const formatedErrorStatus = `\nStatus text: ${response.statusText} \nStatus code: ${response.status}`;

		const errorDetails = `${formatedErrorStatus} ${
			formatedErrorResponseBody ? `\nResponse: ${formatedErrorResponseBody}` : ""
		}`;

		throw new Error(errorDetails);
	}
	return await response.json();
};
