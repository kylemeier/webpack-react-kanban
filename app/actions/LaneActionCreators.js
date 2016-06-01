import uuid from 'node-uuid';
import * as ACTIONS from './LaneActions';

export function createLane(lane){
	return { 
		type: ACTIONS.CREATE_LANE,
		lane: {
			id: uuid.v4(),
			noteIds: lane.noteIds || [],
			name: lane.name
		}
	};
};

export function deleteLane(id){
	return {
		type: ACTIONS.DELETE_LANE,
		id
	};
};

export function updateLane(lane){
	return {
		type: ACTIONS.UPDATE_LANE,
		lane
	}
}