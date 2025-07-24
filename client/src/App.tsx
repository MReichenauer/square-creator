import { Header } from "@layout/header/Header";
import { HomePage } from "@pages/homePage/HomePage";
import { NotFoundPage } from "@pages/notFoundPage/NotFoundPage";
import { SquareGamePage } from "@pages/squareGamePage/SquareGamePage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/square-game" element={<SquareGamePage />}></Route>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
