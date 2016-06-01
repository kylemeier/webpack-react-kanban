import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/LaneActionCreators';
import Lanes from '../components/Lanes';

const mapStateToProps = (state)=>{
	return state || [];
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const LaneList = connect(mapStateToProps, mapDispatchToProps)(Lanes);

export default LaneList;