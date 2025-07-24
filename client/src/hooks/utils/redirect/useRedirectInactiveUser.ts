import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectInactiveUser = (isActive: boolean | null) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isActive === false) {
			navigate({
				pathname: "/",
				search: "?sessionExpired=true",
			});
		}
	}, [isActive, navigate]);
};

export { useRedirectInactiveUser };
