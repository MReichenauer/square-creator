import { HubConnectionBuilder } from "@microsoft/signalr";
const baseUrl = import.meta.env.VITE_SQUARE_API_BASE_URL_DEVELOPMENT;

const signalRHubConnection = new HubConnectionBuilder()
	.withUrl(`${baseUrl}/signal-r-hub`)
	.withAutomaticReconnect()
	.build();

export { signalRHubConnection };
