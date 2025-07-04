import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
const NavigationBar = () => {
	return (
		<nav className={styles.nav} aria-label="Navigation">
			<ul className={styles.menu} role="menubar">
				<li role="none">
					<Link to={"/"} role="menuitem">
						<h3>Square Creator</h3>
					</Link>
				</li>
				<li role="none">
					<Link to={"/"} role="menuitem">
						Home
					</Link>
				</li>
				<li role="none">
					<Link to={"/square-game"} role="menuitem">
						Square Game
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { NavigationBar };
