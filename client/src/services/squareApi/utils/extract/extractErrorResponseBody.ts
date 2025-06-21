import { isContentTypeApplicationJson } from "../validate/isContentTypeApplicationJson";

const extractErrorResponseBody = async (response: Response) => {
	return isContentTypeApplicationJson(response) ? JSON.stringify(await response.json(), null, 2) : null;
};
export { extractErrorResponseBody };
