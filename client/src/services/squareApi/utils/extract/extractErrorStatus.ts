const extractErrorStatus = (response: Response) => {
	return {
		status: response.status,
		statusText: response.statusText,
	};
};

export { extractErrorStatus };
