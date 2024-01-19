import { useState } from "react";
import { useContador } from "../hooks/useContador";
import { Small } from "./Small";

export const Memorize = () => {
	const { contador, incrementar } = useContador(0);

	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>
				Contador: <Small value={contador} />
			</h1>

			<hr />

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
