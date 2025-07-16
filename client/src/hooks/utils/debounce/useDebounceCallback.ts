import { useCallback, useRef } from "react";

const useDebounceCallback = <T extends (...args: Parameters<T>) => void>(callback: T, delay = 200) => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

	return useCallback(
		(...args: Parameters<T>) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
};
export { useDebounceCallback };
