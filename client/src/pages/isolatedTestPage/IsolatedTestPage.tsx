import { squareApi } from "@services/squareApi/squareApi";
import { useActionState } from "react";

const IsolatedTestPage = () => {
	const [result, submitAction, isPending] = useActionState(async (previousState, formData: FormData) => {
		console.log("PREV", previousState);
		const color = formData.get("color");
		const x = Number(formData.get("x"));
		const y = Number(formData.get("y"));
		if (typeof color !== "string" || isNaN(x) || isNaN(y)) {
			return {
				type: "error",
				message: "Invalid data",
			};
		}
		const square = { color, x, y };
		const res = await squareApi.insert(square);
		console.log("RES", res);
		return {
			type: "success",
			data: res,
			message: "Square was created",
		};
	}, null);

	return (
		<>
			{result && (
				<div>
					<p>
						Type: {result.type} Message: {result.message}
					</p>
					<p>Square: {JSON.stringify(result.data)}</p>
				</div>
			)}
			{isPending && <p>Loading...</p>}
			<form action={submitAction}>
				<input type="text" name="color" />
				<input type="text" name="x" />
				<input type="text" name="y" />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export { IsolatedTestPage };
