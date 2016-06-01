import React from 'react';
import { connect } from 'react-redux';
import { createLane } from '../actions/LaneActions';

let CreateLane = ({dispatch})=>{
		return (
			<button 
				onClick={()=>{ dispatch( createLane({name: 'New lane'}) )} }>
				+
			</button>
		);
}

CreateLane = connect()(CreateLane);

export default CreateLane;

