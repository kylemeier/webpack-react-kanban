import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../components/Lanes';

const mapStateToProps = (state)=>{
	return state || [];
}

const LaneList = connect(mapStateToProps)(Lanes);

export default LaneList;