import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteLane, updateLane } from '../actions/LaneActions';
import Lanes from '../components/Lanes';

const mapStateToProps = (state)=>{
	return state || [];
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteLane, updateLane }, dispatch);
}

const LaneList = connect(mapStateToProps, mapDispatchToProps)(Lanes);

export default LaneList;