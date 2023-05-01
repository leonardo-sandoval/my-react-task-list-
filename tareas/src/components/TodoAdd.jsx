import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description,titulo, onInputChange, onResetForm } = useForm({
		description: '',titulo:'',
	});


	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;
		if (titulo.length <= 1) return;
		

		let newTodo = {
			id: new Date().getTime(),
			titulo:titulo,
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-adda'
				name='titulo'
				value={titulo}
				onChange={onInputChange}
				placeholder='¿Escribe tarea?'
			/>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Describe tu Actividad?'
			/>
			
			
			


			<button className='btn-add' type='submit'>
			GUARDAR
			</button>
		</form>
	);
};
