const forbiddenHexCodes = (previousSquareColor: string | null) => {
	return [
		previousSquareColor ? previousSquareColor : "",
		getComputedStyle(document.documentElement).getPropertyValue("--primary-background-color-light"),
		getComputedStyle(document.documentElement).getPropertyValue("--primary-background-color-dark"),
	];
};

export { forbiddenHexCodes };
