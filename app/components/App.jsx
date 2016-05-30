import AltContainer from 'alt-container';
import React from 'react';

import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

import styles from '../main.css'

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

//redux
import CreateLane from '../containers/CreateLane.jsx';
import LaneList from '../containers/LaneList';


@DragDropContext(HTML5Backend)
export default class App extends React.Component {

	render() {

		return (
			<div>
				<CreateLane />
				<LaneList />
			</div>
		);
	}

	addLane(){
		LaneActions.create({name: 'New lane'});
	}
}