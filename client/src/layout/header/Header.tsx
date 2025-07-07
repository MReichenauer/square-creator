import styles from "./Header.module.css";
import { Logo } from "@components/logo/Logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.contentContainer}>
					<Logo />
					<Navigation />
				</div>
			</header>
		</>
	);
};

export { Header };
