import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

import notesStyles from '../Notes.css';
import noteStyles from '../Note.css';

export default ({notes, onValueClick, onEdit, onDelete}) => {
	return (
		<ul className={notesStyles.root}>{notes.map(note => 
			<Note className={noteStyles.root} id={note.id} key={note.id}>
					<Editable
						editing={note.editing}
						value={note.task}
						onValueClick={onValueClick.bind(null, note.id)}
						onEdit={onEdit.bind(null, note.id)}
						onDelete={onDelete.bind(null, note.id)} />
			</Note>
		)}</ul>
		);
}