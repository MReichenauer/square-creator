import { newLine } from "@utils/newLine";

const formatErrorResponseDetails = async (header: { status: number; statusText: string }, body: string | null) => {
	return `${header.status} ${newLine(header.statusText)} ${body ? newLine(`Response body: ${body}}`) : ""}`;
};
export { formatErrorResponseDetails };
