import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
const NavigationBar = () => {
	return (
		<nav aria-label="Main Menu" className={styles.navigation}>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/square-game"}>Square Game</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export { NavigationBar };
