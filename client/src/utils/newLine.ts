const newLine = (content: string, label?: string) => {
	return `\n${label ? `${label}:` : ""} ${content}`;
};
export { newLine };
