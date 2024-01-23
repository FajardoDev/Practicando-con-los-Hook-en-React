import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
	console.log("  Me volví a generar :(  ");

	return (
		<button
			className="btn btn-primary mr-3  bg-black shadow-md shadow-black"
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
	);
});
