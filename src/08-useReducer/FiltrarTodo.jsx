export const FiltrarTodo = ({ error }) => {
	return (
		<div>
			<form className="my-4">
				<label className="relative block max-w-full">
					<span className="sr-only ">Search</span>
					<button
						title="Buscar"
						type="submit"
						className={` absolute inset-y-0 right-0  flex items-center mt-0 pl-6 focus:outline-none rounded-full py-4 px-6 cursor-pointer duration-100 bg-violet-300 hover:bg-violet-400 ${
							error
								? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600 "
								: "focus:border-sky-500 focus:ring-sky-500 border border-white"
						}
						  `}
					>
						<i
							title="Buscar"
							className={`fa-solid fa-magnifying-glass duration-200 text-[1.3rem] mt-1 ${
								error ? "text-red-600/90" : "text-sky-600/90 hover:text-yellow-400"
							} `}
						></i>
					</button>

					<input
						type="text"
						name="search"
						// value={inputValue}
						// onChange={onInputChange}
						className={`hover:bottom-5 placeholder:italic bg-white w-full border  block  rounded-full py-3 pl-12 pr-3 shadow-md shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							error
								? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: " placeholder:text-sky-600/60  focus:border-sky-500 focus:ring-sky-500 border border-white"
						}     `}
						placeholder={
							error
								? "Este campo no puede tener nombre existente, ir vacío ó contener números"
								: "Buscar task..."
						}
					/>
				</label>
			</form>
			{/* <h2 className={`text-center text-xl text-fuchsia-400`}>
				{todos.length ? "Lista de Tareas" : "No Hay Tareas Aún"}
			</h2> */}
		</div>
	);
};
