import { HomePage } from "@pages/homePage/HomePage";
import { IsolatedTestPage } from "@pages/isolatedTestPage/IsolatedTestPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/isolatedTest" element={<IsolatedTestPage />}></Route>
			<Route path="/" element={<HomePage />}></Route>
		</Routes>
	);
}

export default App;
