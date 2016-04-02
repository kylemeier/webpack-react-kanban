import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};

	}

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button className="AddNoteBtn" onClick={this.addNote}>+</button>
				<Notes notes={notes} 
					onEdit={this.editNote}
					onDelete={this.deleteNote} />
			</div>
		);
	}

	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	}

	editNote = (id, task) => {
		if(!task.trim()) return;
		const editedNoteIndex = this.state.notes.findIndex( note => note.id === id );
		const noteToEdit = this.state.notes.find( note => note.id === id );
		const editedNote = Object.assign({}, noteToEdit, {task: task});
		const notes = this.state.notes
										.slice(0,editedNoteIndex)
										.concat([editedNote])
										.concat( this.state.notes.slice(editedNoteIndex) );

		this.setState({notes});
	};

	deleteNote = (id, e) => {
		e.stopPropagation();
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		});
	};
}