import { SessionExpiredModal } from "@components/modals/sessionExpiredModal/SessionExpiredModal";
import styles from "./HomePage.module.css";
import { TargetBlankLink } from "@components/targetBlankLink/TargetBlankLink";

const HomePage = () => {
	return (
		<>
			<SessionExpiredModal />
			<section className={`${styles.section} pageFlexColContainer`}>
				<h2>Home</h2>
				<p>Welcome to Square Creator. This project is the result of my attempt to tackle Wizardworks code challenge.</p>
				<h3>Wizardworks challenge</h3>
				<h4>Summary</h4>
				<p>
					Create a webpage where users can create an infinite number of squares, that positions itself in a square-like
					pattern to eventually form a square shape.
				</p>
				<p>When a square is created it must be given a random color and a position (x and y).</p>
				<p>
					All the squares must be stored on a JSON disk via the API, the shown squares must reflect the current state of
					the JSON disk.
				</p>
				<h4 id="technicalRequirements">Technical Requirements</h4>
				<ul aria-labelledby="technicalRequirements">
					<li>
						The webpage must be built using <TargetBlankLink href="https://reactjs.org/" label="React.js" />.
					</li>
					<li>
						The API must be build using{" "}
						<TargetBlankLink href="https://dotnet.microsoft.com/en-us/languages/csharp" label="C#" />
						/<TargetBlankLink href="https://learn.microsoft.com/en-us/dotnet/" label=".NET" />.
					</li>
				</ul>
				<h4 id="projectLinks">Project Links</h4>
				<ul aria-labelledby="projectLinks">
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
