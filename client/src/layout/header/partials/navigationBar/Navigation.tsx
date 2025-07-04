import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
	return (
		<nav aria-label="Main Menu" className={styles.navigation}>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/square-game"}>Square Game</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Navigation };
