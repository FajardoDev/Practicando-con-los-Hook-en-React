const estadoInicial = [
	{
		id: 1,
		todo: "Recolectar la piedra del alma",
		hecho: false,
	},
];

const todoReducer = (state = estadoInicial, action = {}) => {
	// Add
	if (action.type === "[TODO] add Todo") {
		return [...state, action.payload];
	}
	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: "Recolectar la piedra del poder",
	hecho: false,
};

// Como lucen las acciones
const addTodoAction = {
	type: "[TODO] add Todo",
	payload: newTodo,
};

// Le envio el estado anterior + una Acción
todos = todoReducer(todos, addTodoAction);

// Mala práctica
// todos.push({ });

console.log("todo: ", todos);
