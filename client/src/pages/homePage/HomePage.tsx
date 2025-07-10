import { useSearchParams } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { MessageModal } from "@components/MessageModal/MessageModal";
const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [showModal, setShowModal] = useState(searchParams.get("sessionExpired") === "true");

	useEffect(() => {
		if (searchParams.has("sessionExpired")) {
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.delete("sessionExpired");
			setSearchParams(newSearchParams, { replace: true });
		}
	}, [searchParams, setSearchParams]);

	return (
		<>
			<MessageModal
				title="Inactivity detected"
				message="You have been automatically sent to the home page because you ware inactive for 5 minutes."
				isOpen={showModal}
				closeModal={() => setShowModal(false)}
			/>
			<section className={styles.section}>
				<h2>Home</h2>
				<p>Welcome to Square Creator. This project is the result of my attempt to tackle Wizardworks code challenge.</p>
				<h3>Summary of Wizardworks challenge</h3>
				<h4>Functional requirements</h4>
				<p>
					The goal of the challenge is to create a website where players can create potentionaly an endless amount of
					squares displayed in a pattern where the squares eventually create a square shape. The squares can be created
					by pressing a button. The newly created square must have a random color but it can never be the same as the
					previous square. Each time a new square is created, the result of the new square (position & color) must be
					stored via the API to a JSON disk.
				</p>
				<h4>Technical requirements</h4>
				<p>The website shall be developed in React.js and the API in .NET / C#.</p>
				<h4>Links</h4>
				<ul>
					<li>
						<a target="_blank" href="https://github.com/MReichenauer/square-creator">
							My Github repository for the challenge.
						</a>
					</li>
					<li>
						<a target="_blank" href="https://github.com/Wizardworks-AB/programmeringsuppgift/tree/master">
							Wizardworks Github repository describing the challenge.
						</a>
					</li>
				</ul>
			</section>
		</>
	);
};

export { HomePage };
