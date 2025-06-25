const extractResponseHeaderStatus = (response: Response) => {
	return {
		status: response.status,
		statusText: response.statusText,
	};
};

export { extractResponseHeaderStatus };
