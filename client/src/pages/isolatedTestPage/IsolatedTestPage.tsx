const IsolatedTestPage = () => {
	return (
		<>
			<h1>H1</h1>
			<h2>H2</h2>
			<h3>H3</h3>
			<h4>H4</h4>
			<h5>H5</h5>
			<p>Paragraph</p>
			<div style={{ display: "flex" }}>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#5890fc" }}></div>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#b17dfb" }}></div>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#f7f7f7" }}></div>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#e9e7e7" }}></div>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#212121" }}></div>
				<div style={{ width: "100px", height: "100px", backgroundColor: "#2c2c2c" }}></div>
			</div>
		</>
	);
};

export { IsolatedTestPage };
