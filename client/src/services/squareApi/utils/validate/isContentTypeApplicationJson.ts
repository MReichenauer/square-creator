const isContentTypeApplicationJson = (response: Response) => {
	const contentType = response.headers.get("Content-Type");
	return contentType ? contentType.includes("application/json") : false;
};

export { isContentTypeApplicationJson };
