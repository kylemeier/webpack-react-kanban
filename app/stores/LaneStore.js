import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';

import update from 'react-addons-update';

class LaneStore{
	constructor(){

		this.bindActions(LaneActions);

		this.lanes = [];
	}

	create(inputLane){
		
		const lanes = this.lanes;
		const lane = Object.assign({}, inputLane, { id: uuid.v4(), noteIds: getLaneNoteIds() });

		function getLaneNoteIds(){
			return inputLane.noteIds || [];
		}

		this.setState({
			lanes: lanes.concat(lane)
		});
	}

	update(updatedLane){
		
		const lanes = this.lanes.map(lane => {

			if(lane.id === updatedLane.id){
				return Object.assign({}, lane, updatedLane);
			}

			return lane;
		});

		this.setState({lanes});
	}

	delete(id){
		
		this.setState({
			lanes: this.lanes.filter( lane => lane.id !== id )
		});
	}

	attachToLane({laneId, noteId}){
		
		const lanes = this.lanes.map( lane => {

			if(lane.id === laneId ){

				if( lane.noteIds.includes(noteId) ){
					console.error('already attached note to lane', lane);
				}
				else{
					lane.noteIds.push(noteId);
				}
			}
			return lane;
		});

		this.setState({lanes});
	}

	detachFromLane({laneId, noteId}){
		const lanes = this.lanes.map( lane => {

			if(lane.id === laneId){
				lane.noteIds = lane.noteIds.filter( laneNoteId => laneNoteId !== noteId )
			}

			return lane;
		});

		this.setState({lanes});
	}

	move({sourceId, targetId}){
		const lanes = this.lanes;
		const sourceLane = lanes.filter(lane => lane.noteIds.includes(sourceId))[0];
		const targetLane = lanes.filter(lane => lane.noteIds.includes(targetId))[0];
		const sourceNoteIndex = sourceLane.noteIds.indexOf(sourceId);
		const targetNoteIndex = targetLane.noteIds.indexOf(targetId);

		if(sourceLane === targetLane){

			sourceLane.noteIds = update(sourceLane.noteIds, {
				$splice: [
					[sourceNoteIndex, 1],
					[targetNoteIndex, 0, sourceId]
				]
			});
		}
		else{
			sourceLane.noteIds.splice(sourceNoteIndex,1);
			targetLane.noteIds.splice(targetNoteIndex, 0, sourceId);
		}

		this.setState({lanes});
	}
}

export default alt.createStore(LaneStore, 'LaneStore');