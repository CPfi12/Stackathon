import React, { Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Promise from 'bluebird';
import HomeSub from './HomeSub'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {adding: false}
    this.setAdding = this.setAdding.bind(this);
  }

  setAdding(evt){
    var newAdd = !this.state.adding;
    this.setState({adding: newAdd })
  }
  render() {
        
    return (
      <div>
        <div onClick={this.setAdding}>+</div>
        <div>
          { adding ? <div>Placeholder</div> : <HomeSub/>

          }
        </div>
      </div>
    )
  }
}