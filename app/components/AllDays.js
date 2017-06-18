import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {addTemp} from '../reducers/temp'
import axios from 'axios'
import {LineChart} from 'react-easy-chart';

/* -----------------    COMPONENT     ------------------ */
class AllDays extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    var data = this.props.firstTemps;
    return (
      <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
      <h4>All Days</h4>
    <LineChart
    axisLabels={{x: 'Time of Day', y: 'Temperature in F'}}
    axes
    dataPoints
    xDomainRange={[8, 22]}
    yDomainRange={[50, 120]}
    width={500}
    height={250}
    interpolate={'cardinal'}
    data={data}
  />
        </div>
        </div>
        
    );
}
}




/* -----------------    CONTAINER     ------------------ */
function convert(temps){
  var allData = [];
  for(var i=0;i<temps.length;i++){
    if(!Array.isArray(allData[temps[i].dayId-1])){
      console.log('making an array!');
      allData[temps[i].dayId-1]=[]
      console.log(allData)
    }
    var times = temps[i].time.split(':');
    var x = (+times[0])+(+times[1]/60);
    var y = temps[i].degrees;
    allData[temps[i].dayId-1].push({x:x,y:y})
    console.log('inloop',allData);
  }
  console.log('allData',allData);
  return allData;
}

const mapState = (state) => ({
  message: 'we have state!',
  firstTemps: convert(state.temps)
 });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllDays);