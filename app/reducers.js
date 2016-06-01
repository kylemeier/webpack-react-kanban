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

		default:
			return state
	}
}

const kanbanApp = combineReducers({
	lanes
});

export default kanbanApp;