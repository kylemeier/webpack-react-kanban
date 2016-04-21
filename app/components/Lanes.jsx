import React from 'react';
import Lane from './Lane.jsx';

import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import styles from '../Lane.css';

const laneTarget = {
	hover(targetProps, monitor){
		console.log(targetProps, monitor);
		const targetId = targetProps.lane.id;
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(!targetProps.lane.noteIds.length){
			LaneActions.attachToLane({
				laneId: targetProps.lane.id,
				noteId: sourceId
			});
		}
	}
}

export default ({lanes}) => {
	
	return (
		<div className="Lanes">
			{lanes.map(lane=>
				<Lane className={ styles.root } key={lane.id} lane={lane} />
			)}
		</div>
	);
}