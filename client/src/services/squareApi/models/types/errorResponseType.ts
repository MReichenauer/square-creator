type ErrorResponseType = {
	type: string;
	status: number;
	title: string;
	errors: string[];
	traceId: string;
};

export type { ErrorResponseType };
