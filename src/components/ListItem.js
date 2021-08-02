/** @format */

import React from 'react';
import Card from './Card';

function DoneImg(props) {
	if (props.done) {
		return <img alt='done' width='20px' src='./assets/switch-on.png'></img>;
	} else {
		return <img alt='done' width='20px' src='./assets/switch-off.png'></img>;
	}
}

function ListItem(props) {
	return (
		<li>
			<Card className={props.item.done ? 'done item' : 'item'}>
				{props.item.text}
				<div>
					<button
						onClick={() => {
							props.isDone(props.item);
						}}>
						<DoneImg done={props.item.done}></DoneImg>
					</button>
					<button
						onClick={() => {
							props.delItem(props.item);
						}}>
						<img alt='delete' width='20px' src='./assets/delete.png'></img>
					</button>
				</div>
			</Card>
		</li>
	);
}

export default ListItem;
