const apiAccessKey =
	import.meta.env.VITE_ENVIRONMENT === "DEV"
		? import.meta.env.VITE_API_ACCESS_KEY_DEV
		: import.meta.env.VITE_API_ACCESS_KEY_PROD;
export { apiAccessKey };
