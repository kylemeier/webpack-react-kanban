import { combineReducers } from 'redux';
import {CREATE_LANE} from './actions/LaneActions';

const initialState = {
	lanes: []
};

function lanes(state = [], action){

	switch(action.type){

		case CREATE_LANE:
			return [...state, action.lane]
		default:
			return state
	}
}

const kanbanApp = combineReducers({
	lanes
});

export default kanbanApp;