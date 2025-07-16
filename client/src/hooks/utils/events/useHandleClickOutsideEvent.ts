import { useEffect, type RefObject } from "react";

const useHandleClickOutsideEvent = <T extends HTMLElement | null>(ref: RefObject<T>, onClickOutside: () => void) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [ref, onClickOutside]);
};

export { useHandleClickOutsideEvent };
