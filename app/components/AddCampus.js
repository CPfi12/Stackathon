import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addCampus} from '../reducers/campusReducer';


/* -----------------    COMPONENT     ------------------ */
class AddCampus extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
  );
}
}



/* -----------------    CONTAINER     ------------------ */
const mapState = (state,ownProps) => {
  return {
  message: 'Will add campus'
  }
};
const mapDispatch = (dispatch) => null;

export default connect(mapState, mapDispatch)(AddCampus);