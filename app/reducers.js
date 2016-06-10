import { combineReducers } from 'redux';
import * as ACTIONS from './actions/LaneActions';

const initialState = {
	lanes: []
};

function lanes(state = [], action){

	switch(action.type){

		case ACTIONS.CREATE_LANE:
			return [...state, action.lane]

		case ACTIONS.DELETE_LANE:
			return state.filter( lane=>{return lane.id !== action.id} )

		case ACTIONS.UPDATE_LANE:
			const updatedLane = action.lane;

			return state.map(lane=>{
				if(lane.id === updatedLane.id){
					return Object.assign({}, lane, updatedLane);
				}
				return lane;
			});

		case ACTIONS.ATTACH_TO_LANE:

			return state.map( lane => {

					if(lane.noteIds.includes(action.noteId)){
						lane.noteIds = lane.noteIds.filter(laneNoteId => laneNoteId !== noteId);
					}

					if(lane.id === action.laneId ){

						if( lane.noteIds.includes(action.noteId) ){
							console.error('already attached note to lane', lane);
						}
						else{
							lane.noteIds.push(action.noteId);
						}
					}
					return lane;
				});


		default:
			return state
	}
}

const kanbanApp = combineReducers({
	lanes
});

export default kanbanApp;


// attachToLane({laneId, noteId}){
		
// 		const lanes = this.lanes.map( lane => {

// 			if(lane.noteIds.includes(noteId)){
// 				lane.noteIds = lane.noteIds.filter(laneNoteId => laneNoteId !== noteId);
// 			}
// 			if(lane.id === laneId ){

// 				if( lane.noteIds.includes(noteId) ){
// 					console.error('already attached note to lane', lane);
// 				}
// 				else{
// 					lane.noteIds.push(noteId);
// 				}
// 			}
// 			return lane;
// 		});

// 		this.setState({lanes});
// 	}

// 	detachFromLane({laneId, noteId}){
// 		const lanes = this.lanes.map( lane => {

// 			if(lane.id === laneId){
// 				lane.noteIds = lane.noteIds.filter( laneNoteId => laneNoteId !== noteId )
// 			}

// 			return lane;
// 		});

// 		this.setState({lanes});
// 	}

// 	move({sourceId, targetId}){
// 		const lanes = this.lanes;
// 		const sourceLane = lanes.filter(lane => lane.noteIds.includes(sourceId))[0];
// 		const targetLane = lanes.filter(lane => lane.noteIds.includes(targetId))[0];
// 		const sourceNoteIndex = sourceLane.noteIds.indexOf(sourceId);
// 		const targetNoteIndex = targetLane.noteIds.indexOf(targetId);

// 		if(sourceLane === targetLane){

// 			sourceLane.noteIds = update(sourceLane.noteIds, {
// 				$splice: [
// 					[sourceNoteIndex, 1],
// 					[targetNoteIndex, 0, sourceId]
// 				]
// 			});
// 		}
// 		else{
// 			sourceLane.noteIds.splice(sourceNoteIndex,1);
// 			targetLane.noteIds.splice(targetNoteIndex, 0, sourceId);
// 		}

// 		this.setState({lanes});
// 	}

// 	moveLane({sourceId, targetId}){
// 		console.log('move lane');
// 		const lanes = this.lanes;
// 		const sourceLane = lanes.find(lane => lane.id === sourceId);
// 		const targetLane = lanes.find(lane => lane.id === targetId);
// 		const sourceLaneIndex = lanes.findIndex( lane => lane.id === sourceLane.id);
// 		const targetLaneIndex = lanes.findIndex( lane => lane.id === targetLane.id);

// 		if(sourceLane !== targetLane){
// 			lanes.splice(sourceLaneIndex,1);
// 			// lanes.splice(targetNoteIndex, 0, sourceId);
// 		}
// 		this.setState({lanes});
// 	}