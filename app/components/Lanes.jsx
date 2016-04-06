import React from 'react';
import Lane from './Lane.jsx';

import styles from '../Lane.css';

export default ({lanes}) => {
	return (
		<div className="Lanes">
			{lanes.map(lane=>
				<Lane className={ styles.root } key={lane.id} lane={lane} />
			)}
		</div>
	);
}