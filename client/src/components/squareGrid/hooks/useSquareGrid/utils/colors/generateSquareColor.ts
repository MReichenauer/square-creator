import { generateRandomHexCode } from "@utils/generateRandomHexCode";

const generateSquareColor = (forbiddenHexCodes: string[]) => {
	let attempts = 0;
	while (attempts < 10) {
		const hexCode = generateRandomHexCode();

		if (!forbiddenHexCodes.includes(hexCode)) {
			return hexCode;
		}
		attempts++;
	}
	return forbiddenHexCodes.some((hexCode) => hexCode.toLocaleLowerCase() === "#f1f1f1") ? "#000000" : "#f1f1f1";
};

export { generateSquareColor };
