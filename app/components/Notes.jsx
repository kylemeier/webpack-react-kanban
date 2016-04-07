import React from 'react';
import Editable from './Editable.jsx';

import noteStyles from '../Note.css';

export default ({notes, onValueClick, onEdit, onDelete}) => {
	return (
		<ul className="Notes">{notes.map(note => 
			<li className={noteStyles.root} key={note.id}>
				<Editable
					editing={note.editing}
					value={note.task}
					onValueClick={onValueClick.bind(null, note.id)}
					onEdit={onEdit.bind(null, note.id)}
					onDelete={onDelete.bind(null, note.id)} />
			</li>
			)}</ul>
		);
}