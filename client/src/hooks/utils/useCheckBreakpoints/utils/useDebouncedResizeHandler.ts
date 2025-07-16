import type { Dispatch, SetStateAction } from "react";
import { useDebounceCallback } from "../../debounce/useDebounceCallback";

const useDebouncedResizeHandler = (setState: Dispatch<SetStateAction<number>>) => {
	const debounceHandler = useDebounceCallback(() => {
		setState(window.innerWidth);
	});

	return { debounceHandler };
};

export { useDebouncedResizeHandler };
