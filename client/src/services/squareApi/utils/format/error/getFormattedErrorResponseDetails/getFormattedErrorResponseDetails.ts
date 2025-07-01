import { extractResponseBody } from "@services/squareApi/utils/extract/extractResponseBody";
import { extractResponseHeaderStatus } from "@services/squareApi/utils/extract/extractResponseHeaderStatus";
import { formatErrorResponseDetails } from "./partials/formatErrorResponseDetails";

const getFormattedErrorResponseDetails = async (response: Response) => {
	const header = extractResponseHeaderStatus(response);
	const body = await extractResponseBody(response);
	const formattedErrorResponseDetails = formatErrorResponseDetails(header, body);
	return formattedErrorResponseDetails;
};

export { getFormattedErrorResponseDetails };
