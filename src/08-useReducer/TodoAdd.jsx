import { useEffect, useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import { v4 as uuidv4 } from "uuid"; // Importa uuid

export const TodoAdd = ({
	todos = [],
	onNewTodo,
	editTodo,
	onEditarTodo,
	setEditTodo,
}) => {
	const { formState, description, onInputChange, onResetForm } = useFormulario({
		description: "",
	});

	const [nombre, setNombre] = useState("");

	useEffect(() => {
		if (Object.keys(editTodo).length > 0) {
			setNombre(editTodo.description);
			console.log("Se llenó");
		} else {
			console.log("Está vacío");
		}
	}, [editTodo]);

	const onFormNewTodo = (e) => {
		e.preventDefault();

		// if (description.length <= 1) return;
		if (nombre.length <= 1) return;
		// if (nombre.includes(nombre)) return;

		let newTodo = {
			// id: new Date().getTime(),
			description: nombre,
			done: false,
			fecha: Date.now(),
		};

		if (editTodo.id) {
			// Editando Registro
			// newTodo.id = editTodo.id; // Asignación de id

			console.log("Nuevo", newTodo); // Obj Completo no tinía id
			console.log("Editado", editTodo); // Tiene id, pero Asignación de id now version anterior

			const todosActualizados = todos.map((todoState) =>
				todoState.id === editTodo.id ? newTodo : todoState,
			);

			// newTodo = todosActualizados;
			// console.log(todoActualizado);

			onNewTodo(newTodo);
			// onNewTodo({ todosActualizados });
		} else {
			// New Registro
			// newTodo.id = new Date().getTime();
			newTodo.id = uuidv4();
			onNewTodo(newTodo);
		}

		setNombre("");
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
						// id="description"
						className="px-3 py-2 text-slate-800 bg-white border shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 shadow-slate-500"
						placeholder="¿Qué hay que hacer..."
						value={nombre}
						onChange={({ target }) => setNombre(target.value)}
					/>
				</label>

				<button
					title="Agregar"
					className="bg-purple-500/80 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/45 hover:shadow-sm delay-300 py-2 px-6 mb-2"
					type="submit"
				>
					{editTodo.id ? "Guardar Cambios" : "Create task"}
				</button>
			</form>
		</>
	);
};

{
	/* <input
					title="Agregar"
					className="bg-purple-500/80 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  shadow-md shadow-purple-600/45 hover:shadow-sm delay-300 py-2 px-6 mb-2"
					type="submit"
					value={editTodo.id ? "Guardar Cambios" : "Create task"}
				/> */
}
