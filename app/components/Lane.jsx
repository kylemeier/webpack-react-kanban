import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import LaneActions from '../actions/LaneActions';

import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import Editable from './Editable.jsx';

import styles from '../Lane.css';

import mainStyles from '../main.css';

const laneSource = {
	beginDrag(props){
		return {
			id: props.id
		};
	}
};

const laneTarget = {
	hover(targetProps, monitor){
		console.log(targetProps);
		const targetId = targetProps.id;
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(sourceId !== targetId){
			targetProps.onMoveLane({sourceId, targetId});
		}
	}
}

const noteTarget = {
	hover(targetProps, monitor){

		const targetId = targetProps.lane.id;
		const sourceProps = monitor.getItem();
		const sourceId = sourceProps.id;

		if(!targetProps.lane.noteIds.length){
			LaneActions.attachToLane({
				laneId: targetProps.lane.id,
				noteId: sourceId
			});
		}
	}
}

@DragSource(ItemTypes.LANE, laneSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
}))
@DropTarget(ItemTypes.LANE, laneTarget, (connect) => ({
	connectDropTarget: connect.dropTarget()
}))
@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
	connectDropTarget: connect.dropTarget()
}))
export default class Lane extends React.Component {
	render(){
		const {connectDragSource, connectDropTarget, isDragging, lane,
			id, onMoveLane, editing, ...props} = this.props;

		const dragSource = editing ? a => a : connectDragSource;

		return dragSource(connectDropTarget(
			<div {...props}>
				<div className={styles.header} onClick={this.activateLaneEdit}>
					<div className={styles.addNote}>
						<button className={mainStyles.btn} onClick={this.addNote}>+</button>
					</div>
					<Editable 
						className={styles.name}
						editing={lane.editing}
						value={lane.name}
						onEdit={this.editName} />
					<div className={styles.delete}>
						<button className={styles.deleteBtn} onClick={this.deleteLane}>x</button>
					</div>
				</div>
				<AltContainer
					stores = {[NoteStore]}
					inject = {{
						notes: () => NoteStore.getNotesByIds(lane.noteIds)
					}} >
					<Notes 
						onValueClick = {this.activateNoteEdit}
						onEdit={this.editNote} 
						onDelete={this.deleteNote} />
				</AltContainer>
			</div>
		));
	}

	editNote(id, task){
		if(!task.trim()){
			NoteActions.update({id, editing: false});
			return;
		}

		NoteActions.update({id,task, editing: false});
	}

	addNote = (e) => {
		e.stopPropagation();

		const laneId = this.props.lane.id;
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

	editName = (name) => {
		
		const laneId = this.props.lane.id;

		if(!name.trim()){
			LaneActions.update({id: laneId, editing: false});
			return;
		}

		LaneActions.update({id: laneId, name, editing:false});
	}

	deleteLane = (e) => {
		e.stopPropagation();
		const laneId = this.props.lane.id;
		this.props.deleteLane(laneId);
	}

	activateLaneEdit = () => {
		const laneId = this.props.lane.id;

		LaneActions.update({id: laneId, editing: true});
	}

	activateNoteEdit(id) {
		NoteActions.update({id, editing: true});
	}
}