import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import axios from 'axios'
import {LineChart} from 'react-easy-chart';

/* -----------------    COMPONENT     ------------------ */
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className = 'row'>
        <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form>
              <label>
                Name
              </label>
              <br/>
              <input type="text" name="name" />
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
  message: 'we have state!'
 });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Profile);