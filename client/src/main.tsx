import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SignalRContextProvider } from "@contexts/signalR/SignalRContext.tsx";
import { ErrorBoundary } from "@components/errorBoundary/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary>
			<SignalRContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SignalRContextProvider>
		</ErrorBoundary>
	</StrictMode>,
);
