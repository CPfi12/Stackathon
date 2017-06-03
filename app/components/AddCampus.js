import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addCampus} from '../reducers/campusReducer';


/* -----------------    COMPONENT     ------------------ */
class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.onCampusSubmit = this.onCampusSubmit.bind(this);
  }

  onCampusSubmit(evt){
    evt.preventDefault();
    console.log('Submitted!');
    const campusInfo = {
      name: evt.target.name.value,
      imageUrl: evt.target.imageURL.value
    }
    this.props.addCampus(campusInfo);
    console.log("login info",campusInfo);
  }

  render(){
    return (
      <div>
          <h1>Enter Campus Information:</h1>
          <h4>{this.props.message}</h4>
          <form onSubmit={this.onCampusSubmit}>
            <div>
              <label>Name</label>
              <input
                name="name"
                type="name"
              />
            </div>
            <div>
                <label>Image URL</label>
                <input
                  name="imageURL"
                  type="imageURL"
                />
            </div>
            <button type="submit">Submit</button>
          </form>
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
const mapDispatch = {addCampus};

export default connect(mapState, mapDispatch)(AddCampus);