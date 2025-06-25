const isContentTypeApplicationJson = (response: Response) => {
	console.log("contentType:", response.headers.get("Content-Type"));
	const contentType = response.headers.get("Content-Type")?.toLowerCase();
	return contentType ? contentType.includes("json") : false;
};

export { isContentTypeApplicationJson };
