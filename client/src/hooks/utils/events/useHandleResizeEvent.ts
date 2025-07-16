import { useEffect } from "react";

const useHandleResizeEvent = (handleResize: () => void) => {
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", handleResize);
		};
	}, [handleResize]);
};
export { useHandleResizeEvent };
