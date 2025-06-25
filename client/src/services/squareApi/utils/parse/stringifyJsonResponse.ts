const stringifyJsonResponse = async (response: Response) => {
	return JSON.stringify(await response.json(), null, 2);
};

export { stringifyJsonResponse };
