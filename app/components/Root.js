import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import axios from 'axios'

/* -----------------    COMPONENT     ------------------ */
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt){
    evt.preventDefault();
    const tempInfo = {
      temp: evt.target.temp.value
    }
    if(tempInfo.temp>=103 && tempInfo.temp<=104){
        axios.get(`/api/cats/${this.props.name.name}/${tempInfo.temp}`)
        alert('You have a high temperature. Temperatures above 104 are considered dangerous. We have alerted your contacts.')
        
    }
    else if(tempInfo.temp>104){
        axios.get(`/api/emergency/${this.props.name.name}/${tempInfo.temp}`)
        alert('You have a dangerously high temperature. Call 911! We have alerted your emergency contacts.');   
    }
    this.props.addTemp(tempInfo);
    evt.target.temp.value="";
  }
  render(){
    console.log('ROOT PROPS',this.props)
    return (
      <div className="row">
      <div className="col-xs-4"></div>
      <div className="col-xs-4" style = {{'text-align': 'center'}}>
      <br/>
      <br/>
          <form onSubmit={(evt)=>this.handleSubmit(evt)}>
              <label style={Object.assign({},{'color': 'steelblue'},{'font-family': 'Quicksand, sans-serif'},{'font-size':'15px'})}>
                Current Temperature
              </label>
              <br/>
              <input type="text" name="temp" placeholder={this.props.name.name+'\'s Temperature (F)'} />
              <br/>
              <br/>
              <input type="submit" value="Submit" className="btn btn-primary" />
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
const mapDispatch = {addTemp};

export default connect(mapState, mapDispatch)(Root);

