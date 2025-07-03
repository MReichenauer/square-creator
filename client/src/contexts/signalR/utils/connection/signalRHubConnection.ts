import { HubConnectionBuilder } from "@microsoft/signalr";
import { apiBaseUrl } from "@services/squareApi/utils/url/apiBaseUrl";

const signalRHubConnection = new HubConnectionBuilder()
	.withUrl(`${apiBaseUrl}/signal-r-hub`)
	.withAutomaticReconnect()
	.build();
console.log("signalRHubConnection base url", apiBaseUrl);
export { signalRHubConnection };
