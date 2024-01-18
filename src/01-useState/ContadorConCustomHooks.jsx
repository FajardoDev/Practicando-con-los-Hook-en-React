import { useContador } from "../hooks/useContador";

export const ContadorConCustomHooks = () => {
	const { contador, incrementar, descrementar, reset } = useContador();

	return (
		<div>
			<h1>Contador Con Custom Hooks: {contador}</h1>

			<hr />

			<div className="space-x-2">
				<button
					className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600 hover:shadow-sm delay-300 "
					type="button"
					onClick={() => incrementar(2)}
				>
					+1
				</button>
				<button
					className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-md shadow-purple-600 hover:shadow-sm delay-300"
					type="button"
					onClick={reset}
				>
					Reset
				</button>
				<button
					className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-md shadow-purple-600 hover:shadow-sm delay-300"
					type="button"
					onClick={() => descrementar(2)}
				>
					-1
				</button>
			</div>
		</div>
	);
};
