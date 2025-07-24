const apiBaseUrl =
	import.meta.env.VITE_ENVIRONMENT === "DEV"
		? import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT
		: import.meta.env.VITE_SQUARE_API_BASE_URL_PRODUCTION;

export { apiBaseUrl };
