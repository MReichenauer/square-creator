import { extractResponseBody } from "@services/squareApi/utils/extract/extractResponseBody";
import { extractResponseHeaderStatus } from "@services/squareApi/utils/extract/extractResponseHeaderStatus";
import { formatErrorResponseDetails } from "./partials/formatErrorResponseDetails";

const getFormattedErrorResponseDetails = async (response: Response) => {
	const header = extractResponseHeaderStatus(response);
	console.log("header:", header);
	const body = await extractResponseBody(response);
	console.log("body:", body);
	const formattedErrorResponseDetails = formatErrorResponseDetails(header, body);
	console.log("formattedErrorResponseDetails:", formattedErrorResponseDetails);
	return formattedErrorResponseDetails;
};

export { getFormattedErrorResponseDetails };
