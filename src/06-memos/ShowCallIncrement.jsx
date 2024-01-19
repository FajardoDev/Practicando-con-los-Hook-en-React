import React from "react";

export const ShowCallIncrement = React.memo(({ incrementar }) => {
	console.log("Me volví a generar :( ");

	return (
		<button
			className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/30 hover:shadow-sm delay-75 transition-all "
			type="button"
			onClick={() => {
				incrementar(5);
			}}
		>
			Incrementar
		</button>
	);
});
