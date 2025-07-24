import { HubConnectionBuilder } from "@microsoft/signalr";
import { apiAccessKey } from "@services/squareApi/utils/url/apiAccessKey";
import { apiBaseUrl } from "@services/squareApi/utils/url/apiBaseUrl";

const signalRHubConnection = new HubConnectionBuilder()
	.withUrl(`${apiBaseUrl}/signal-r-hub`, {
		accessTokenFactory: () => apiAccessKey,
	})
	.withAutomaticReconnect()
	.build();
export { signalRHubConnection };
