const isContentTypeApplicationJson = (response: Response) => {
	const contentType = response.headers.get("Content-Type")?.toLowerCase();
	return contentType ? contentType.includes("json") : false;
};

export { isContentTypeApplicationJson };
