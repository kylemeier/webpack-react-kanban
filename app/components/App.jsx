import AltContainer from 'alt-container';
import React from 'react';

import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

import styles from '../main.css'

export default class App extends React.Component {

	render() {

		return (
			<div>
				<button className={styles.btn} onClick={this.addLane}>+</button>
				<AltContainer
					stores={[LaneStore]}
					inject={{
						lanes: () => LaneStore.getState().lanes || []
					}} >
					<Lanes />
				</AltContainer>
			</div>
		);
	}

	addLane(){
		LaneActions.create({name: 'New lane'});
	}
}