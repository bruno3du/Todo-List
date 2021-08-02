/** @format */

import React, { useState, useEffect } from 'react';
import List from './components/List';
import './Todo.css';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';
const SAVED_ITEMS = 'savedItems';

function Todo() {
	const [itens, setItens] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
		if (savedItems) {
			setItens(savedItems);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(SAVED_ITEMS, JSON.stringify(itens));
	}, [itens]);

	function onAddItem(text) {
		let it = new Item(text);

		setItens([...itens, it]);
		onHideModal();
	}

	function delItem(item) {
		let filterItem = itens.filter((it) => it.id !== item.id);
		setItens(filterItem);
	}

	function isDone(item) {
		let updateDone = itens.map((it) => {
			if (it.id === item.id) {
				it.done = !it.done;
			}
			return it;
		});
		setItens(updateDone);
	}

	function onHideModal() {
		setShowModal(false);
	}

	return (
		<div className='container'>
			<header className='header'>
				<h1>Todo</h1>
				<button onClick={() => setShowModal(true)} className='addButton'>
					+
				</button>
			</header>

			<List isDone={isDone} delItem={delItem} itens={itens}></List>
			<Modal show={showModal} onHideModal={onHideModal}>
				<TodoForm onAddItem={onAddItem}></TodoForm>
			</Modal>
		</div>
	);
}

export default Todo;
