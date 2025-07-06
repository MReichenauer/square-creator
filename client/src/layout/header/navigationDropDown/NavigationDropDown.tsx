import { useEffect, useRef, useState } from "react";
import styles from "./NavigationDropDown.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useHandleClickOutsideEvent } from "@hooks/utils/events/useHandleClickOutsideEvent";
const NavigationDropDown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	useHandleClickOutsideEvent(navRef, () => setIsOpen(false));

	return (
		<nav ref={navRef} className={styles.navigation}>
			<button
				className={styles.toggleDropDown}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-controls="Main Menu"
			>
				&#8801;
			</button>
			{isOpen && (
				<ul id="Main Menu" className={styles.dropDownOptions}>
					<li>
						<NavLink to={"/"}>Home</NavLink>
					</li>
					<li>
						<NavLink to={"/square-game"}>Square Game</NavLink>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavigationDropDown;
