import { useRef, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { Error } from "../components/Error";

export const FocusScreen = () => {
	const { onInputChange, onResetForm, nombre, error } = useFormulario({
		nombre: "",
	});

	// console.log(error);

	const inputRef = useRef();

	const onFocusBtn = () => {
		// document.querySelector("input").select();
		// console.log("inputRef: ", inputRef);
		inputRef.current.select();
	};

	return (
		<>
			<h1>Focus Screen</h1>

			<hr />

			<div className="mt-4 max-w-lg space-y-3">
				<label className="block">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-400">
						Nombre:
					</span>
					<input
						ref={inputRef}
						type="text"
						name="nombre"
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-slate-700"
						placeholder="Ingrese su nombre"
						value={nombre}
						onChange={onInputChange}
					/>
				</label>

				{/* {error && <Error>{error}</Error>} */}

				<button
					className="bg-blue-900 py-2 px-6 hover:bg-blue-800 transition-colors"
					onClick={onFocusBtn}
				>
					Set Focus
				</button>
				<button
					className={`bg-red-900 py-2 px-6 hover:bg-red-800 transition-colors ml-8 ${
						nombre !== "" ? "" : "cursor-not-allowed opacity-50"
					}`}
					onClick={onResetForm}
					disabled={nombre === ""}
				>
					Reset
				</button>
			</div>
		</>
	);
};
