import { memo, useMemo, useState } from "react";
import { useContador } from "../hooks/useContador";

const heavyStuff = (numberIteration = 100) => {
	for (let i = 0; i < numberIteration; i++) {
		console.log("Ahi vamos.....");
	}

	return `${numberIteration} Iteraciones Realizadas`;
};

export const MemoHook = () => {
	const { contador, incrementar } = useContador(0);

	const [show, setShow] = useState(true);

	// Para realizar tareas o proccesos pesados useMemo
	const memorizeValue = useMemo(() => heavyStuff(contador), [contador]);

	return (
		<div>
			<h1>
				Contador: <small>{contador}</small>
			</h1>

			<hr />

			<h2 className="mt-4 text-xl">{memorizeValue}</h2>

			<div className="space-x-4">
				<button
					className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/30 hover:shadow-sm delay-75 transition-all "
					type="button"
					onClick={() => incrementar()}
				>
					+1
				</button>
				<button
					className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/30 hover:shadow-sm delay-75 transition-all "
					type="button"
					onClick={() => setShow()}
				>
					Show/Hide {""}
					{JSON.stringify(show)}
				</button>
			</div>
		</div>
	);
};
