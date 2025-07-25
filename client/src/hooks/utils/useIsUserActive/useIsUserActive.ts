import { useCallback, useRef, useState } from "react";

const useIsUserActive = (inactivityLimit = 10000) => {
	const [isActive, setIsActive] = useState<boolean | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const handleUserActivity = useCallback(() => {
		setIsActive(true);
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			setIsActive(false);
		}, inactivityLimit);
	}, [timeoutRef, inactivityLimit]);

	return { isActive, handleUserActivity };
};

export { useIsUserActive };
