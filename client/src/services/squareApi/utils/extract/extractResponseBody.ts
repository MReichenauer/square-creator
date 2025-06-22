import { stringifyJsonResponse } from "../parse/stringifyJsonResponse";
import { isContentTypeApplicationJson } from "../validate/isContentTypeApplicationJson";

const extractResponseBody = (response: Response) => {
	return isContentTypeApplicationJson(response) ? stringifyJsonResponse(response) : null;
};
export { extractResponseBody };
