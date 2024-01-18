import { useEffect, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";

export const FormularioConCustomHooks = () => {
	const { formState, onInputChange, onResetForm, nombre, email, password } =
		useFormulario({
			nombre: "",
			email: "",
			password: "",
		});

	// const { nombre, email, password } = formState;

	return (
		<div>
			<h1>Formulario Con Custom Hook</h1>

			<hr />

			<div className="space-y-4 mt-4">
				<div className="max-w-md">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300">
							Nombre Completo
						</span>
						<input
							type="text"
							name="nombre"
							className="mt-1 px-3 py-2 text-slate-800 bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500"
							placeholder="Ariel Fajardo"
							value={nombre}
							onChange={onInputChange}
						/>
					</label>
				</div>
				<div className="max-w-md">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300">
							Email
						</span>
						<input
							type="email"
							name="email"
							className="mt-1 px-3 py-2 text-slate-800 bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500"
							placeholder="you@example.com"
							value={email}
							onChange={onInputChange}
						/>
					</label>
				</div>
				<div className="max-w-md">
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-300">
							Contraseña
						</span>
						<input
							type="password"
							name="password"
							className="mt-1 px-3 py-2 text-slate-800 bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500"
							placeholder="Contraseña..."
							value={password}
							onChange={onInputChange}
						/>
					</label>
				</div>
				<button
					type="button"
					className="bg-red-800 py-1 px-8 "
					onClick={onResetForm}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
