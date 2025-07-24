import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectOnRevisit = (redirectPath = "/") => {
	const navigate = useNavigate();
	const initialSession = useRef(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				initialSession.current = false;
			} else if (document.visibilityState === "visible" && !initialSession.current) {
				navigate(redirectPath);
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [navigate, redirectPath]);
};

export { useRedirectOnRevisit };
