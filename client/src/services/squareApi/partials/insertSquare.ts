import type { BaseSquareType, SquareType } from "@models/types/square";
import { getFormattedErrorResponseDetails } from "../utils/format/error/getFormattedErrorResponseDetails/getFormattedErrorResponseDetails";
import { apiBaseUrl } from "@services/squareApi/utils/url/apiBaseUrl";
import { apiAccessKey } from "../utils/url/apiAccessKey";

const insertSquare = async (square: BaseSquareType) => {
	const response = await fetch(`${apiBaseUrl}/square`, {
		method: "POST",
		body: JSON.stringify(square),
		headers: {
			"Content-Type": "application/json",
			"access-key": apiAccessKey,
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
