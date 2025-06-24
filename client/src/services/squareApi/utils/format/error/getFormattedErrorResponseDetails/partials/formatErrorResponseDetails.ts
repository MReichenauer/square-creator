import { newLine } from "@utils/newLine";

const formatErrorResponseDetails = async (header: { status: number; statusText: string }, body: string | null) => {
	return `${newLine(String(header.status), "Status")} ${newLine(header.statusText, "Status text")} ${
		body ? newLine(body, "Response body") : ""
	}`;
};
export { formatErrorResponseDetails };
