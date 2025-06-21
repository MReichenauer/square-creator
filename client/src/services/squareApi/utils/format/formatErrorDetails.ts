import { newLine } from "@utils/newLine";
import { extractErrorResponseBody } from "../extract/extractErrorResponseBody";
import { extractErrorStatus } from "../extract/extractErrorStatus";

const formatErrorDetails = async (response: Response) => {
	const body = await extractErrorResponseBody(response);
	const status = extractErrorStatus(response);
	console.log("formatErrorDetails", { body, status });
	return `${status.status} ${newLine(status.statusText)} ${body ? newLine(`Response body: ${body}}`) : ""}`;
};
export { formatErrorDetails };
