import React from 'react';
import Lane from './Lane.jsx';

import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import styles from '../Lane.css';

export default ({lanes}) => {
	console.log(lanes);
	return (
		<div className="Lanes">
			{lanes.map(lane=>
				<Lane className={ styles.root } key={lane.id} lane={lane} />
			)}
		</div>
	);
}