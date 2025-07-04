import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Navigation } from "@layout/header/partials/navigationBar/Navigation";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.contentContainer}>
				<Link to={"/"}>
					<h3>Square Creator</h3>
				</Link>
				<Navigation />
			</div>
		</header>
	);
};

export { Header };
