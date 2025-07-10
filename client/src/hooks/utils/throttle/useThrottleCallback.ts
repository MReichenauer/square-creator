import { useCallback, useRef } from "react";

const useThrottleCallback = <T extends (...args: Parameters<T>) => void>(callback: T, delay = 200) => {
	const previousCall = useRef(0);

	return useCallback(
		(...args: Parameters<T>) => {
			const currentCall = Date.now();
			if (currentCall - previousCall.current >= delay) {
				previousCall.current = currentCall;
				callback(...args);
			}
		},
		[callback, delay],
	);
};

export { useThrottleCallback };
