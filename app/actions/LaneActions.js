import uuid from 'node-uuid';

export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const ATTATCH_TO_LANE = 'ATTATCH_TO_LANE';
export const DETATCH_FROM_LANE = 'DETATCH_FROM_LANE';
export const MOVE = 'MOVE';
export const MOVE_LANE = 'MOVE_LANE';

export function createLane(lane){
	return { 
		type: CREATE_LANE,
		lane: {
			id: uuid.v4(),
			noteIds: lane.noteIds || [],
			name: lane.name
		}
	};
};

export function deleteLane(id){
	return {
		type: DELETE_LANE,
		id
	};
};

// , 
// 	'update', 
// 	'delete', 
// 	'attachToLane', 
// 	'detachFromLane',
// 	'move',
// 	'moveLane'
// );