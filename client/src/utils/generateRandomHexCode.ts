const generateRandomHexCode = () => {
	return (
		"#" +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.toLocaleLowerCase()
	);
};
export { generateRandomHexCode };
