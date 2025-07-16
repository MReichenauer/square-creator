import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<NavLink className={styles.logo} to={"/"}>
			<h1>Square Creator</h1>
			<div className={styles.squareContainer} aria-hidden="true">
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
			</div>
		</NavLink>
	);
};

export { Logo };
