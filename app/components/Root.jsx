import React, { Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Promise from 'bluebird';
export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {schools: '',
    students: ''}
  }
/*componentDidMount(){
  Promise.all([axios.get('/api/campus'), axios.get('/api/students')])
    .then(res=> res.map((r) => res.data))
    .spread((schoolL,studL)=>{
      this.setState({schools: schoolL,
                    students: studL})
    })
}*/
  
  render() {
    console.log('props',this.props);
    return (
      <div>
      <Link to='/campuses'>Campuses</Link>
      <br/>
      <Link to='/students'>Students</Link>
      { this.props.children }
      </div>
      ) 
    /*return (
      <div>
        <h3>Space Schools!</h3>
        <ul>
          <li><Link to='/schools'>HOME</Link></li>
          <li><Link to='/students'>STUDENTS</Link></li>
        </ul>
        <div>
        {
          this.props.children && React.cloneElement(this.props.children, props)
        }
        </div>
      </div>
    )*/
  }
}


    