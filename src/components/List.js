/** @format */

import React from 'react';
import ListItem from './ListItem';

function List(props) {
	return (
		<ul>
			{props.itens.map((item) => (
				<ListItem
					key={item.id}
					item={item}
					isDone={props.isDone}
					delItem={props.delItem}></ListItem>
			))}
		</ul>
	);
}
export default List;
