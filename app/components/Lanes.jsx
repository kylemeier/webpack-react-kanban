import React from 'react';
import Lane from './Lane.jsx';

import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import styles from '../Lane.css';

export default class Lanes extends React.Component {
	render(){
			const {lanes, deleteLane, updateLane} = this.props;

			return (
				<div className="Lanes">
					{lanes.map(lane=>
						<Lane className={ styles.root } 
									key={lane.id} 
									lane={lane} 
									deleteLane={deleteLane}
									updateLane={updateLane} />
					)}
				</div>
			);
	}
}