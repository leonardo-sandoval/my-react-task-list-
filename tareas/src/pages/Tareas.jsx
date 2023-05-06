import React from 'react'
import '../App.css';
import { TodoAdd } from '../components/TodoAdd';
import { TodoList } from '../components/TodoList';
import { useTodo } from '../hooks/useTodo';



function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
		
<center>
    <br></br>
			<div className='card-to-do'>
				<header className='heade'>
					<h1>Lista de tareas</h1>
				</header>
				
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>

				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
			</center>
		</>
	);
}

export default App;