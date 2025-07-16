import { useState } from "react";
import { useDebouncedResizeHandler } from "./utils/useDebouncedResizeHandler";
import { useHandleResizeEvent } from "../events/useHandleResizeEvent";
import { currentBreakpoint } from "./utils/currentBreakpoint";

const useCheckBreakpoints = () => {
	const [screenSize, setScreenSize] = useState(window.innerWidth);

	const { debounceHandler } = useDebouncedResizeHandler(setScreenSize);
	useHandleResizeEvent(debounceHandler);

	return currentBreakpoint(screenSize);
};

export { useCheckBreakpoints };
