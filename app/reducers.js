import { combineReducers } from 'redux';
import {
	CREATE_LANE,
	DELETE_LANE,
	UPDATE_LANE,
} from './actions/LaneActions';

const initialState = {
	lanes: []
};

function lanes(state = [], action){

	switch(action.type){

		case CREATE_LANE:
			return [...state, action.lane]

		case DELETE_LANE:
			return state.filter( lane=>{return lane.id !== action.id} )

		case UPDATE_LANE:
			const updatedLane = action.lane;

			return state.map(lane=>{
				if(lane.id === updatedLane.id){
					return Object.assign({}, lane, updatedLane);
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