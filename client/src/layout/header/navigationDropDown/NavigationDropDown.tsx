import { useEffect, useRef, useState } from "react";
import styles from "./NavigationDropDown.module.css";
import { Link, useLocation } from "react-router-dom";

const NavigationDropDown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (event.target instanceof Node && navRef.current && !navRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

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
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/square-game"}>Square Game</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavigationDropDown;
