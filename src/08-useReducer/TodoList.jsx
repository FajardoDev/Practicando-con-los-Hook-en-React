import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEditTodo } from "./tuArchivoDeAcciones";

const EditarTodoFormulario = ({
	todoId,
	descripcionActual,
	onCancelarEdicion,
}) => {
	const dispatch = useDispatch();
	const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcionActual);

	const handleGuardarEdicion = () => {
		dispatch(handleEditTodo(todoId, nuevaDescripcion));
		// Restaurar la descripción actual después de guardar
		onCancelarEdicion();
	};

	const handleCancelarEdicion = () => {
		// Restaurar la descripción actual al cancelar
		onCancelarEdicion();
	};

	return (
		<div>
			<input
				type="text"
				value={nuevaDescripcion}
				onChange={(e) => setNuevaDescripcion(e.target.value)}
			/>
			<button onClick={handleGuardarEdicion}>Guardar</button>
			<button onClick={handleCancelarEdicion}>Cancelar</button>
		</div>
	);
};

// import { TodoItem } from "./TodoItem";

// export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
// 	// console.log(todo);

// 	return (
// 		<>
// 			{todos.map((todo) => (
// 				<TodoItem
// 					key={todo.id}
// 					todo={todo}
// 					onDeleteTodo={onDeleteTodo}
// 					onToggleTodo={onToggleTodo}
// 				/>
// 			))}
// 		</>
// 	);
// };
