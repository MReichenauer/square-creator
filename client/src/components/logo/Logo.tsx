import styles from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<span className="screenReaderOnly">Square Creator logo</span>
			<div className={styles.squareContainer}>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
				<div className={styles.square}></div>
			</div>
			<h2>Square Creator</h2>
		</div>
	);
};

export { Logo };
