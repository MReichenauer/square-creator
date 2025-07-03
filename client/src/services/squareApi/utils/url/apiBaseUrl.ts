const apiBaseUrl =
	import.meta.env.VITE_ENVIRONMENT === "dev"
		? import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT
		: import.meta.env.VITE_SQUARE_API_BASE_URL_PRODUCTION;
console.log("VITE_ENVIRONMENT:", import.meta.env.VITE_ENVIRONMENT);
console.log("apiBaseUrl", apiBaseUrl);

export { apiBaseUrl };
