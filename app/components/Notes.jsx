import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

import notesStyles from '../Notes.css';
import noteStyles from '../Note.css';

import LaneActions from '../actions/LaneActions';

export default ({notes, onValueClick, onEdit, onDelete}) => {
	return (
		<ul className={notesStyles.root}>{notes.map(note =>  {
			return(
				<Note className={noteStyles.root} id={note.id} key={note.id}
					editing={note.editing} onMove={LaneActions.move}>
						<Editable
							editing={note.editing}
							value={note.task}
							onValueClick={onValueClick.bind(null, note.id)}
							onEdit={onEdit.bind(null, note.id)}
							onDelete={onDelete.bind(null, note.id)} />
				</Note>
			);
		})}
		</ul>
		);
}