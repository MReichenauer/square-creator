import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
	return (
		<>
			<section className={`${styles.section} pageFlexColContainer`}>
				<h2>404 Not Found</h2>
				<p>The page you are looking for could not be found.</p>
			</section>
		</>
	);
};

export { NotFoundPage };
