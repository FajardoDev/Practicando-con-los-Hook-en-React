// import { memo } from "react"; useMemo mejora el proceso de tareas pesadas
import React from "react";

export const Small = React.memo(({ value }) => {
	console.log('Me volví a dibujar ( ")');

	return (
		<>
			<small>{value}</small>
		</>
	);
});
