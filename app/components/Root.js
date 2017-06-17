import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleSumit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt){
    evt.preventDefault();
    const tempInfo = {
      temp: evt.target.temp.value
    }
    if(tempInfo.temp>=103 && tempInfo.temp<=104){
        axios.get(`/api/cats/Joe/${tempInfo.temp}`)
        alert('You have a high temperature. Temperatures above 104 are considered dangerous')
        
    }
    else if(tempInfo.temp>104){
        axios.get(`/api/emergency/Joe/${tempInfo.temp}`)
        alert('You have a dangerously high temperature. Call 911');   
    }
    console.log('her!!!')
    this.props.addTemp(tempInfo);
  }
  render(){
    return (
      <div className="row">
      <div className="col-xs-4" style = {{'text-align': 'center'}}>
          <form onSubmit={(evt)=>this.handleSubmit(evt)}>
              <label>
                Current Temperature
              </label>
              <br/>
              <input type="text" name="temp" />
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-success" />
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
const mapDispatch = {addTemp};

export default connect(mapState, mapDispatch)(Root);

