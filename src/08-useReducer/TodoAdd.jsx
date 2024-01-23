// import React, { useState } from "react";

import { useFormulario } from "../hooks/useFormulario";

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useFormulario({
		description: "",
	});

	const onFormNewTodo = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
			fecha: Date.now(),
		};

		// Si existe no se volverá a llamar
		onNewTodo(newTodo);
		onResetForm();
	};

	return (
		<>
			<form onSubmit={onFormNewTodo}>
				<label className="block">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300 mb-2 dark:text-fuchsia-400 mt-5">
						Task Name
					</span>
					<input
						type="text"
						name="description"
						className="px-3 py-2 text-slate-800 bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500"
						placeholder="¿Qué hay que hacer..."
						value={description}
						onChange={onInputChange}
					/>
				</label>

				<button
					title="Agregar"
					className="bg-purple-500/80 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/45 hover:shadow-sm delay-300 py-2 px-6 mb-2"
					type="submit"
				>
					Create task
				</button>
			</form>
		</>
	);
};
