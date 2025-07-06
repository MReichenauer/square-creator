import { useCallback, useRef } from "react";

const useDebounceCallback = <T extends (...args: Parameters<T>) => void>(callback: T, delay = 200) => {
	const timeout = useRef<ReturnType<typeof setTimeout>>(null);

	return useCallback(
		(...args: Parameters<T>) => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}

			timeout.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
};
export { useDebounceCallback };
