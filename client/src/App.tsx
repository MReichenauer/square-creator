import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>}></Route>
			<Route path="/about" element={<h1>About</h1>}></Route>
		</Routes>
	);
}

export default App;
