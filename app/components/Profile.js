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
  }
  render(){
    return (
      <div className = 'row'>
        <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form onSubmit={(evt)=>{this.handleSubmit(evt)}}>
              <label>
                Name
              </label>
              <br/>
              <input type="text" name="name" placeholder={this.props.name}/>
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-success"/>
          </form>
          </div>
          <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form>
              <label>
                Contact Numbers for High Temperatures:
              </label>
              <br/>
              <input type="text" name="high" />
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-success"/>
          </form>
          </div>
          <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form>
              <label>
                Contact Number for Dangerous Temperatures:
              </label>
              <br/>
              <input type="text" name="dangerous" />
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-success"/>
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