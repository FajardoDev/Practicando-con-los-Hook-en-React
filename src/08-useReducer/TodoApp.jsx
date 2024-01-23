import { TodoAdd } from "./TodoAdd";
import { FiltrarTodo } from "./FiltrarTodo";
import { useTodo } from "./hooks/useTodo";
import Imagen from "../img/todoList.png";

export const TodoApp = () => {
	const {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		cantidad,
		pendiente,
	} = useTodo();

	return (
		<>
			<h1 className="font-semibold text-center">
				<span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
					Lista de Tareas App
				</span>
			</h1>
			<hr />

			<div className="grid md:grid-cols-2 gap-4">
				<div className="bg-slate-950 py-6 px-8 mt-4 rounded-md shadow-md shadow-slate-900">
					<h2 className="text-2xl font-medium text-fuchsia-700">Create new task</h2>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />

					<img
						className="rounded-md h-[22rem] mt-4 w-[90%] mx-auto object-cover"
						src={Imagen}
						alt="Imagen List"
					/>
				</div>

				{/* División */}

				<div className="mt-1 py-8 px-8 ">
					<h2 className="text-5xl font-bold text-center">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
							{todos.length ? "Your tasks" : "No Tasks Yet"}
						</span>
					</h2>

					<p className="text-base space-x-3 mt-2 text-center text-fuchsia-500 font-medium">
						<span>
							Total: <strong>{todos.length}</strong>{" "}
						</span>
						<span>
							Completado: <strong>{cantidad}</strong>{" "}
						</span>
						<span>
							Pendiente: <strong>{pendiente}</strong>{" "}
						</span>
					</p>

					<FiltrarTodo
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>

					{/* List */}

					{/* <TodoList
						
					/> */}
				</div>
			</div>
		</>
	);
};

{
	/* <ul
						role="list"
						className="marker:text-sky-400 list-disc pl-8 mt-6 text-xl"
					>
						<li className="mt-1">Item 1</li>
						<li className="mt-1">Item 2</li>
						<li className="mt-1">Item 3</li>
					</ul> */
}
