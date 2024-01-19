import React, { useCallback, useState } from "react";
import { ShowCallIncrement } from "./ShowCallIncrement";

export const Callback = () => {
	const [contador, setContador] = useState(2);

	// Sirve para memorizar funciones y regresa una función que puedo volver a ejecutar se ejecuta .. algo cambie
	const valorIncrementar = useCallback((valueHijo) => {
		setContador((valor) => valor + valueHijo);
	}, []);

	// const valorIncrementar = () => {
	// 	setContador(contador + 1);
	// };

	return (
		<div>
			<h1> useCallback Hook: {contador}</h1>

			<hr />

			<ShowCallIncrement incrementar={valorIncrementar} />
		</div>
	);
};
