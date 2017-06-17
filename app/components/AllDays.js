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
    return (
      <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
      <h4>All Days</h4>
          <LineChart
    axes
    dataPoints
    xDomainRange={[0, 7]}
    yDomainRange={[0, 70]}
    width={500}
    height={250}
    interpolate={'cardinal'}
    data={[
      [
        { x: 1, y: 25 },
        { x: 2.2, y: 10 },
        { x: 3, y: 25 },
        { x: 4.2, y: 10 },
        { x: 5, y: 12 },
        { x: 6, y: 25 }
      ], [
        { x: 1, y: 40 },
        { x: 1.4, y: 30 },
        { x: 1.5, y: 25 },
        { x: 3, y: 60 },
        { x: 4, y: 22 },
        { x: 5, y: 9 }
      ]
    ]}
  />
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

export default connect(mapState, mapDispatch)(AllDays);