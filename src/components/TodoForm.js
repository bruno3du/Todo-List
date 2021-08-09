/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/listAction';

function TodoForm(props) {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	function handleChange(event) {
		
		let t = event.target.value;
		setText(t);
	}

	function addItemEvent(event) {
		event.preventDefault();
		if (text) {
			dispatch(addItem(text));
			setText('');
			props.onHideModal()
		}
	}

	return (
		<form>
			<input onChange={handleChange} type='text' value={text}></input>
			<button onClick={addItemEvent}>Adicionar</button>
		</form>
	);
}

export default TodoForm;
