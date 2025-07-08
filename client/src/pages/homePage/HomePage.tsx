import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<section className={styles.section}>
			<h2>Home</h2>
			<p>Welcome to Square Creator. This project is the result of my attempt to tackle Wizardworks code challenge.</p>
			<h3>Summary of the requirements for the challenge</h3>
			<h4>Functional requirements</h4>
			<p>
				The goal of the challenge is to create a website where players can create potentionaly an endless amount of
				squares displayed in a pattern where the squares eventually create a square shape. The squares can be created by
				pressing a button. The newly created square must have a random color but it can never be the same as the
				previous square. Each time a new square is created, the result of the new square (position & color) must be
				stored via the API to a JSON disk.
			</p>
			<h4>Technical requirements</h4>
			<p>The website shall be developed in React.js and the API in .NET / C#.</p>
			<h4>Links</h4>
			<ul>
				<li>
					<a target="_blank" href="https://github.com/MReichenauer/square-creator">
						Github repository for my attempt.
					</a>
				</li>
				<li>
					<a target="_blank" href="https://github.com/Wizardworks-AB/programmeringsuppgift/tree/master">
						Github repository for Wizardworks code challenge.
					</a>
				</li>
			</ul>
		</section>
	);
};

export { HomePage };
