import React from "react";
import { FormatearFecha, horaActual } from "../helpers/FormaterarFecha";

export const TodoItem = React.memo(({ todo, onDeleteTodo, onToggleTodo }) => {
	const { done } = todo;
	const { fecha } = todo;
	const hora = horaActual();

	return (
		<>
			<div
				className={`bg-white text-base border border-violet-400 text-slate-800 px-5 py-3 rounded-md relative mt-3  ${
					done && "cursor-not-allowed opacity-30 line-through"
				}`}
				title={done ? "TODO completado" : "TODO pendiente"}
				role="alert"
				onClick={() => onToggleTodo(todo.id)}
				aria-disabled={done === true}
			>
				<span className="block sm:inline mr-4 font-medium">{todo.description}</span>

				{/* <input
					className="float-start w-6 h-6 rounded-full bg-slate-500"
					type="checkbox"
					name="todos"
				/> */}

				<p className="text-xs text-slate-600 font-medium  ">
					Agregado el: {""}
					<span>{FormatearFecha(fecha)}</span>
					<span>
						{""} a las: {hora}
					</span>
				</p>

				<span className="absolute top-0 bottom-0 right-0 px-2 py-3 peer-has-[:checked]:hidden ">
					<svg
						className="fill-current h-7 w-7 text-red-500 hover:text-red-700"
						role="button"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						onClick={() => onDeleteTodo(todo.id)}
					>
						<title>Eliminar</title>
						<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
					</svg>
				</span>
			</div>
		</>
	);
});
