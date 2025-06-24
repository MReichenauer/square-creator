const newLine = (string: string, label?: string) => {
	return `\n${label ? `${label}:` : ""} ${string}`;
};
export { newLine };
