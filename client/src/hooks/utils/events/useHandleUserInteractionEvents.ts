import { useEffect } from "react";

const useHandleUserInteractionEvents = (callback: () => void) => {
	useEffect(() => {
		window.addEventListener("mousemove", callback);
		window.addEventListener("mousedown", callback);
		window.addEventListener("scroll", callback);
		window.addEventListener("keydown", callback);
		window.addEventListener("touchstart", callback);
		window.addEventListener("touchmove", callback);

		callback();
		return () => {
			window.removeEventListener("mousemove", callback);
			window.removeEventListener("mousedown", callback);
			window.removeEventListener("scroll", callback);
			window.removeEventListener("keydown", callback);
			window.removeEventListener("touchstart", callback);
			window.removeEventListener("touchmove", callback);
		};
	}, [callback]);
};

export { useHandleUserInteractionEvents };
