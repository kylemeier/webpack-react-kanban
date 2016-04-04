import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import LaneActions from '../actions/LaneActions';

export default class Lane extends React.Component {
	render(){
		const {lane, ...props} = this.props;

		return (
			<div {...props}>
				<div className="Lane-header">
					<div className="Lane-addNote">
						<button onClick={this.addNote}>+</button>
					</div>
					<div className="Lane-name">{lane.name}</div>
				</div>
				<AltContainer
					stores = {[NoteStore]}
					inject = {{
						notes: () => NoteStore.getNotesByIds(lane.noteIds)
					}} >
					<Notes onEdit={this.editNote} onDelete={this.deleteNote} />
				</AltContainer>
			</div>
		);
	}

	editNote(id, task){
		if(!task.trim()){
			return;
		}

		NoteActions.update({id,task});
	}

	addNote = (e) => {
		const laneId = this.props.lane.id;
		debugger;
		const note = NoteActions.create({task: 'New task'});
		LaneActions.attachToLane({
			noteId: note.id,
			laneId
		});
	}

	deleteNote = (noteId, e) => {
		e.stopPropagation();

		const laneId = this.props.lane.id;

		LaneActions.detachFromLane({laneId, noteId});
		NoteActions.delete(noteId);
	}
}