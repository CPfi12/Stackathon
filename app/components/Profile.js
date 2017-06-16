import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
          <form>
              <label>
                Name
              </label>
              <br/>
              <input type="text" name="name" />
              <br/>
              <input type="submit" value="Submit" />
          </form>
          <form>
              <label>
                Contact Numbers for High Temperatures:
              </label>
              <br/>
              <input type="text" name="high" />
              <br/>
              <input type="submit" value="Submit" />
          </form>
          <form>
              <label>
                Contact Number for Dangerous Temperatures:
              </label>
              <br/>
              <input type="text" name="dangerous" />
              <br/>
              <input type="submit" value="Submit" />
          </form>

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