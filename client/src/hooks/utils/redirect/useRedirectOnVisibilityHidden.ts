import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectOnVisibilityHidden = (redirectPath = "/") => {
	const navigate = useNavigate();

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				navigate(redirectPath);
			}
		};
		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [navigate, redirectPath]);
};

export { useRedirectOnVisibilityHidden };
