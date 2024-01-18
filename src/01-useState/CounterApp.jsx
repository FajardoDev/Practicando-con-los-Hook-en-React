import { useState } from "react";

export const CounterApp = () => {
	const [stateContador, setCounter] = useState({
		contador1: 20,
		contador2: 20,
		contador3: 0,
	});

	const { contador1, contador2, contador3 } = stateContador;

	const newContador3 = (contador1 / contador2).toFixed(3);

	return (
		<>
			<h1>Counter1: {contador1}</h1>
			<h1>Counter2: {contador2}</h1>
			<h1>Counter3: {contador3}</h1>

			<hr />

			<button
				className=""
				value={contador1}
				onClick={() =>
					setCounter({
						...stateContador,
						contador1: contador1 + 1,
						contador2: contador2 != 0 ? contador2 - 1 : 0,
						contador3: contador2 != 0 ? newContador3 : "No puedo dividir / 0",
					})
				}
			>
				+1
			</button>
		</>
	);
};
