import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
	children: ReactNode;
	fallback?: string;
};
type ErrorBoundaryState = {
	hasError: boolean;
	error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = {
		hasError: false,
		error: null,
	};

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}
	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error, info);
	}

	render() {
		if (this.state.hasError) {
			const { error } = this.state;
			const { fallback } = this.props;

			return (
				<div>
					<h4>{fallback || "An error occurred"}</h4>
					<pre>View details below: {error?.message || "No additional details available"}</pre>
				</div>
			);
		}

		return this.props.children;
	}
}
export { ErrorBoundary };
