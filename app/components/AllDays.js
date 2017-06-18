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
    var colors = ['firebrick', 'hotpink', 'tomato', 'darkorange', 'mediumorchid', 'rebeccapurple', 'dark magenta']
    var data = this.props.firstTemps;
    var times = this.props.forTimes[0];
    var high = [];
    var dangerous = [];
    console.log(times);
    for(var i=0;i<times.length;i++){
      if(parseFloat(times[i].y)>=103&&times[i].y<=104)
        high.push(times[i].x+':00')
      else if(parseFloat(times[i].y)>104)
        dangerous.push(times[i].x+':00');
    }
    console.log('H',high)
    console.log('D',dangerous)
    return (
      <div className="row">
      <div className="col-sm-4">
      
      </div>
      <div className="col-sm-4">
      {/*<Link to='/allDays'>All Days </Link>
      <p>     </p>
      <Link to='/byDay'>By Day </Link>
      <p>     </p>
      <Link to='/byHour'>By Hour</Link>*/}
      <h4 style={{'font-family': 'Quicksand, sans-serif'}}>All Days</h4>
    <LineChart
    axisLabels={{x: 'Time of Day', y: 'Temperature in F'}}
    axes
    dataPoints
    lineColors={colors}
    xDomainRange={[8, 24]}
    yDomainRange={[50, 120]}
    width={500}
    height={250}
    interpolate={'cardinal'}
    data={data}
  />
  {
    data.map((day,index)=>{
      var a = colors[index];
      var toSty = {color:a};
      return(<p style={toSty}>Day{index+1}</p>)
    })
  }
  {
    data.map((day, index)=>{
      return(
        <div>
        <h4 style={{'font-family': 'Quicksand, sans-serif'}}>Temperature for day {index+1}</h4>
        <LineChart
    axisLabels={{x: 'Time of Day', y: 'Temperature in F'}}
    axes
    dataPoints
    lineColors={[colors[index]]}
    xDomainRange={[8, 24]}
    yDomainRange={[50, 120]}
    width={500}
    height={250}
    interpolate={'cardinal'}
    data={[day]}
  /> 
  </div>
        )
    })
  }
  

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
      //console.log('making an array!');
      allData[temps[i].dayId-1]=[]
      //console.log(allData)
    }
    var times = temps[i].time.split(':');
    var x = (+times[0])+(+times[1]/60);
    var y = temps[i].degrees;
    console.log('YYY')
    allData[temps[i].dayId-1].push({x:x,y:y})
    //console.log('inloop',allData);
  }
  //console.log('allData',allData);
  return allData;
}

function byTime(temps){
  var obj ={};
  var arr = [];
  for(var i=0;i<temps.length;i++){
    var times = temps[i].time.split(':');
    var x = Math.round(parseFloat((+times[0])+(+times[1]/60)));
    var y = temps[i].degrees;
    obj[x] = (obj[x]) ? obj[x] : [];
    obj[x].push(y);
  }
  for(var key in obj){
    var newVal = obj[key].reduce((total,val)=>{return parseFloat(total)+parseFloat(val)},0)/obj[key].length
    arr.push({x:key,y:newVal});
  }
  return [arr];
}
function byDay(temps){
  var newData = convert(temps)
  var toRet = [];
  console.log('byDay?')
  for(var i=0;i<newData.length;i++){
    var a = newData[i].reduce((total,val)=>{
      console.log(parseFloat(total)+parseFloat(val.y))
      return parseFloat(total) + parseFloat(val.y)
    },0)/newData[i].length;
    toRet.push({x:i+1,y:a});
  }
  console.log('toRet',toRet)
  return [toRet];
}

const mapState = (state) => ({
  message: 'we have state!',
  firstTemps: convert(state.temps),
  forDays: byDay(state.temps),
  forTimes: byTime(state.temps)
 });
const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllDays);