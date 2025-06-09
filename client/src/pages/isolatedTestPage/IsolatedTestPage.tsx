import { Square } from "@components/square/Square";

const IsolatedTestPage = () => {
	return (
		<>
			<div style={{ display: "flex", gap: "var(--spacing-2)" }}>
				<Square square={{ color: "#990000", id: 1, x: 1, y: 1 }} />
				<Square square={{ color: "#ff7518", id: 2, x: 2, y: 2 }} />
				<Square square={{ color: "#000099", id: 3, x: 3, y: 3 }} />
			</div>
		</>
	);
};

export { IsolatedTestPage };
