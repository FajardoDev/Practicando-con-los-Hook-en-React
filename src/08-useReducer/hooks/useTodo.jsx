import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const estadoInicial = [];

const initStorage = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, estadoInicial, initStorage);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		// console.log({ todo });
		const action = {
			type: "[TODO] add Todo",
			payload: todo,
		};
		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		// console.log(id);
		const resultado = confirm("Desea eliminar la tarea?");

		if (resultado) {
			dispatch({
				type: "[TODO] remove Todo",
				payload: id,
			});
			return;
		}
	};

	const handleToggleTodo = (id) => {
		// console.log({ id });
		dispatch({
			type: "[TODO] toggle Todo",
			payload: id,
		});
	};

	const contarDoneTrue = (array) =>
		array.reduce((count, todo) => count + (todo.done ? 1 : 0), 0);
	const cantidad = contarDoneTrue(todos);

	const pendiente = todos.length - cantidad;

	return {
		...todos,
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		cantidad,
		pendiente,
	};
};

// Saber la cantidad de todos y  traer solo los true
// const filtrarTrue = (array) => {
//     const itemTrue = array.filter((todo) => todo.done === true);
//     const cantidadDoneTrue = itemTrue.length;

//     return { itmsTrue: itemTrue, cantidadTrue: cantidadDoneTrue };
// };

// const { itmsTrue: arrayTrue, cantidadTrue: cantidad1 } = filtrarTrue(todos);

// console.log(arrayTrue, cantidad1);