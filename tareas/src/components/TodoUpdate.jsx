import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription,updatetitulo, onInputChange } = useForm({
		updateDescription: todo.description,updatetitulo:todo.titulo,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;
		const titulo= updatetitulo;

		handleUpdateTodo(id, description,titulo);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updatetitulo'
				value={updatetitulo}
				onChange={onInputChange}
				placeholder='¿Vacio?'
				readOnly={disabled}
				ref={focusInputRef}
			/>
			<input
				type='text'
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Vacio?'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};
