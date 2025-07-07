import { Header } from "@layout/header/Header";
import { HomePage } from "@pages/homePage/HomePage";
import { IsolatedTestPage } from "@pages/isolatedTestPage/IsolatedTestPage";
import SquareGamePage from "@pages/SquareGamePage/SquareGamePage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/isolatedTest" element={<IsolatedTestPage />}></Route>
				<Route path="/square-game" element={<SquareGamePage />}></Route>
				<Route path="/" element={<HomePage />}></Route>
			</Routes>
		</>
	);
}

export default App;
