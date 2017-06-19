import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import {addName} from '../reducers/name.jsx'
import axios from 'axios'
import {LineChart} from 'react-easy-chart';

/* -----------------    COMPONENT     ------------------ */
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt){
    evt.preventDefault();
    var name = {name:evt.target.name.value}
    this.props.addName(name);
    evt.target.name.value = ""
  }
  render(){
    return (
      <div className = 'row'>
        <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form onSubmit={(evt)=>{this.handleSubmit(evt)}}>
              <label style={{color: 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>
                Name
              </label>
              <br/>
              <input type="text" name="name" placeholder={this.props.name.name}/>
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
          </div>
          <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form>
              <label style={{color: 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>
                Contact Numbers for High Temperatures:
              </label>
              <br/>
              <input type="text" name="high" placeholder={"+19149245510"}/>
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
          </div>
          <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form>
              <label style={{color: 'white'}} style={{'font-family': 'Quicksand, sans-serif'}}>
                Contact Number for Dangerous Temperatures:
              </label>
              <br/>
              <input type="text" name="dangerous" placeholder={"+19149245510"}/>
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
          </div>
        </div>
        
    );
}
}




/* -----------------    CONTAINER     ------------------ */
const mapState = (state) => ({
  message: 'we have state!',
  name: state.name
 });
const mapDispatch = {addName};

export default connect(mapState, mapDispatch)(Profile);